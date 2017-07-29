import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  @Input('todosLength_Child')
  todosLength;

  @Output()
  clearcompleted = new EventEmitter<any>();

  doClearcompleted() {
    this.clearcompleted.emit();
  }

  constructor() { }

  ngOnInit() {
  }

}
