import { Component, Input, Output, OnInit, EventEmitter, OnChanges } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  private _todos: any[];


  @Input('data')
  set todos(todos) {
    this._todos = todos;
    this.tooMore = this.todos.length > 5
  }
  get todos() {
    return this._todos;
  }

  @Output()
  clearcompleted = new EventEmitter<any>();

  doClearcompleted() {
    this.clearcompleted.emit();
  }

  constructor() { }

  ngOnInit() {
  }

  tooMore;
}
