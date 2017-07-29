import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  colspan = 2;
  title = 'app';
  inputHint = 'What needs to be done?';
  todos: any[] = [];
  todo: string = '';
  private apiUrl = 'http://localhost:3000/todos';

  constructor(private http:Http) {

  }

  ngOnInit() {
     this.http.get(this.apiUrl)
    .subscribe(res=> {
      this.todos = res.json();
    })
  }

  addTodo() {
    if (this.todo) {
      let newTodo = {
        text: this.todo,
      done: false
      };
      //這邊要注意改成[...this.todos];,再變更陣列時,才會觸發變更偵測
      // this.todos = [...this.todos];
      // this.todos.push(newTodo);
      // this.todo = '';

      this.http.post(this.apiUrl, newTodo)
      .subscribe(res => {
        let data = res.json();
        this.todos = [...this.todos];
        this.todos.push(data);
        this.todo = '';
      });
    }
  }

  clearcompleted(evt) {
    this.todos = this.todos.filter(item => item.done).map(item => {
    this.removeTodo(item);
    });
  }

  filterType;

  filterData(data) {
    console.log(data);
    this.filterType = data;
  }

  isToggleAll: boolean = false;
  toggleAll(event) {
    this.todos = this.todos.map(item=>{item.done = event; return item;});

    this.todos.forEach(item=>{
      this.http.put(`${this.apiUrl}/${item.id}`, item).subscribe();
    })
  }

  removeTodo(todo) {
    console.log(todo);
      this.todos = this.todos.filter(items=> items !== todo);
      this.http.delete(`${this.apiUrl}/${todo.id}`)
      .subscribe(res => {
        this.todos = this.todos.filter(item=>item.id != todo.id);
      });
  }

  todoUpdate(todo) {
      this.http.put(`${this.apiUrl}/${todo.id}`, todo).subscribe();
  }

}
