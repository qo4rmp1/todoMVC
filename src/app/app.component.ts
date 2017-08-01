import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { DataServiceService } from './data-service.service';

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

  constructor(private dataSvc : DataServiceService) {

  }

  ngOnInit() {
    this.dataSvc.getTodos()
    .subscribe(data=> {
      this.todos = data;
    })
  }

  addTodo() {
    if (this.todo) {
      let newTodo = {
        text: this.todo,
        done: false
      };

      this.dataSvc.addTodo(newTodo)
      .subscribe(data => {
        this.todos = [...this.todos];
        this.todos.push(data);
        this.todo = '';
      });
    }
  }

  clearcompleted(evt) {
    this.todos.filter(item => item.done)
    .forEach(item => {
    this.removeTodo(item);
    });
  }

  filterType: string;

  filterData(data) {
    console.log(data);
    this.filterType = data;
  }

  isToggleAll: boolean = false;
  toggleAll(event) {
    this.todos = this.todos.map(item=>{item.done = event; return item;});

    this.todos.forEach(item=>{
      this.dataSvc.updateTodo(item).subscribe();
    })
  }

  removeTodo(todo) {
    console.log(todo);
      this.todos = this.todos.filter(items=> items !== todo);

      this.dataSvc.removeTodo(todo)
      .subscribe(data => {
        this.todos = this.todos.filter(item=>item.id != todo.id);
      });
  }

  todoUpdate(todo) {
      this.dataSvc.updateTodo(todo).subscribe();
  }
}
