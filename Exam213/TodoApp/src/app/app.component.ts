import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TodoApp';
  public todos = [];

  addTodoParent(value) {
    this.todos.push({
      id: new Date().getTime(),
      name: value,
      status: false
    });
  }
  changeStatus(value) {
    this.todos[value].status = !this.todos[value].status;
  }
  deleteTodo(value){
    
    this.todos.splice(value,1);
  }
}
