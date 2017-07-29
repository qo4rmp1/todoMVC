import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  colspan = 2;
  title = 'app';
  inputHint = 'What needs to be done?';
  todos: any[] = [];
  todo: string = '';

  addTodo() {
    if (this.todo) {

      this.todos = [...this.todos];
      this.todos.push({
        text: this.todo,
      done: false
      });
      this.todo = '';

    //   this.todos.push({
    //     text: this.todo,
    //   done: false});
    //   this.todo = '';
    }
  }

  clearcompleted(evt) {
    for(let i = this.todos.length - 1; i >= 0; i--) {
      if (this.todos[i].done){
        this.todos.splice(i, 1);
      }
    }
    // this.todos.forEach(element => {
    //   if (element.done){
    //     let idx = this.todos.indexOf(element);
    //     this.todos.splice(idx, 1);
    //   }
    // });
  }
}
