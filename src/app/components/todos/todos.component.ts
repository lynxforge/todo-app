import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Todo } from './../../todo.model';

@Component({
  selector: 'app-todos',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.scss'
})
export class TodosComponent implements OnInit {
  
  todos: Todo[] = [];
  newTodo: string = '';

  ngOnInit(){
    const stored = localStorage.getItem('todos');

    if(stored){
      try{
        this.todos = JSON.parse(stored);
      }catch{
        console.warn('Failed to parse stored todos');
      }
    }
  }

  private saveTodos(){
      localStorage.setItem('todos', JSON.stringify(this.todos));
  }

  addTodo(){
    const trimmed = this.newTodo.trim();
    if(!trimmed) return;

    this.todos.push({
      content: trimmed,
      completed: false
    });

    this.newTodo = '';
    this.saveTodos();
  }

  toggleDone(i: number){
    this.todos[i].completed = !this.todos[i].completed;
    this.saveTodos();
  }

  deleteTodo(i: number){
    this.todos.splice(i, 1);
    this.saveTodos();
  }
}
