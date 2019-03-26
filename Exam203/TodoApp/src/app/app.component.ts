import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TodoApp';
  public todos: any[] = [
    {
      label: 'Bring milk',
      status: false
    },
    {
      label: 'Clean House',
      status: false
    },
    {
      label: 'Work',
      status: true
    },
    {
      label: 'Buy Moto',
      status: false
    }
  ];

  addTodo(newTodoLabel) {
    var newTodo =
    {
      label: newTodoLabel,
      status: false
    }

    this.todos.push(newTodo);
    // console.log(this.todos);
  }
  deleteTodo(todo) {
    this.todos = this.todos.filter(t => t.label !== todo.label);
  }

  onToggle(value) {
    this.todos[value].status = !this.todos[value].status;
    console.log(this.todos[value].status);
  }
}
