import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  public newTodo:string;
  public todos:any;
  public todoObj:any;
  constructor() {
    this.newTodo = '';
    this.todos = [];
  }
  
  ngOnInit() {}


}
