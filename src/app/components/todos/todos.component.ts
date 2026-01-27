import { Component } from '@angular/core';
import { Todo } from './../../todo.model'

@Component({
  selector: 'app-todos',
  standalone: true,
  imports: [],
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.scss'
})
export class TodosComponent {
  todos: Todo[] = [
    { content: 'Learn Angular basic', completed: false },
    { content: 'Watch tutorial video', completed: true }
  ];

  toggleDone(i: number){
    this.todos[i].completed = !this.todos[i].completed;
  }

  deleteTodo(i: number){
    this.todos.splice(i, 1);
  }
}
