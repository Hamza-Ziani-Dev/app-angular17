import { TodoService } from './../../services/todo.service';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Todo } from '../../models/todo';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-to-do-list',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule,
    RouterModule
  ],
  templateUrl: './to-do-list.component.html',
  styleUrl: './to-do-list.component.css'
})
export class ToDoListComponent {
Title:string = "To Do List";

todos: Todo[] = [];
newTodo : Todo = {} as Todo

myTodo: Todo = {
  title: '',
  completed: false,
};

isEditForm : boolean = false

showForm : boolean = false

searchTodo : string = ''

constructor(private TodoService: TodoService) {}

ngOnInit(): void {
  this.getTodo();
}

getTodo() {
  this.TodoService.getTodos().subscribe((todo) => {
    this.todos = todo;
  });
}

deleteTodo(id: any) {
  this.TodoService
    .deleteTodo(id)
    .subscribe(
      () => (this.todos = this.todos.filter((todo) => todo.id != id))
    );
}

addTodo() {
  this.TodoService.createTodo(this.myTodo).subscribe((todo:any) => {
    this.todos.push(todo);
    this.myTodo = {
      title: '',
      completed: false,
    };
    this.showForm = false
  });
}



changesComplated(todo:any){
  return this.TodoService.changesComplated(todo.complated,todo.id).subscribe(
    ()=>{
      todo.complated=!todo.complated
    }
  )
}


// Edit Todo:
editTodo(todo:any){
  this.myTodo = todo
  this.isEditForm = true
}



updateTodo(){
  this.TodoService.updateTodo(this.myTodo).subscribe(()=>{
    this.myTodo = {
      title: '',
      completed: false,
    };
    this.isEditForm = false
  })
}


searchTodoList(){
  this.todos = this.todos.filter((todo)=>todo.title.includes(this.searchTodo))
}

}
