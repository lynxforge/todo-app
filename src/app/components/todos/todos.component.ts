import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Todo } from './../../todo.model';

@Component({
  selector: 'app-todos',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.scss'
})
export class TodosComponent {
  todos: Todo[] = [
    { content: 'Learn Angular basic', completed: false },
    { content: 'Watch tutorial video', completed: true }
  ];

  newTodo: string = '';

  addTodo(){
    const trimmed = this.newTodo.trim();
    if(!trimmed) return;

    this.todos.push({
      content: trimmed,
      completed: false
    });

    this.newTodo = '';
  }

  toggleDone(i: number){
    this.todos[i].completed = !this.todos[i].completed;
  }

  deleteTodo(i: number){
    this.todos.splice(i, 1);
  }
}
