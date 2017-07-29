import { Component, Input, Output, OnInit, EventEmitter, OnChanges } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit, OnChanges {

  @Input('data') todos;

  @Output()
  clearcompleted = new EventEmitter<any>();

  doClearcompleted() {
    this.clearcompleted.emit();
  }

  constructor() { }

  ngOnInit() {
  }

  tooMore;
  ngOnChanges() {
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add 'implements OnChanges' to the class.
    console.log('ngOnChanges');
    // this.tooMore = this.todosLength > 5;
    this.tooMore = this.todos.length > 5
  }
}
