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
      this.todos.push(this.todo);
      this.todo = '';
    }
  }
}
