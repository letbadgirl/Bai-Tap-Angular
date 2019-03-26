import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  @Input('arrTodo') arrTodo = [];
  @Output() changeTodo = new EventEmitter();
  @Output() deleteTodo = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  changeStatus(item) {
    //console.log(item);
    this.changeTodo.emit(item);
  }
  deleteTD(item) {
    this.deleteTodo.emit(item);
  }

}
