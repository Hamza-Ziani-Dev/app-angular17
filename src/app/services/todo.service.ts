import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Todo } from '../models/todo';
@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private apiUrl = 'http://localhost:3000';

  constructor(private HttpClient: HttpClient) { }


  ngOnInit(): void {
    
  }


  // get all todos
getTodos() :  Observable<Todo[]> {
  return this.HttpClient.get<Todo[]>(`${this.apiUrl}/todos`);
}

// create todo
createTodo(todo: Todo) : Observable<Todo> {
  return this.HttpClient.post<Todo>(`${this.apiUrl}/todos`, todo);
}
  

getOneTodo(id: number): Observable<Todo> {
  return this.HttpClient.get<Todo>(`${this.apiUrl}/todos/${id}`);
}



//update todo:
updateTodo(todo: Todo): Observable<Todo> {
  return this.HttpClient.put<Todo>(`${this.apiUrl}/todos/${todo.id}`, todo);
}


//delete todo:
deleteTodo(id: number): Observable<Todo> {
  return this.HttpClient.delete<Todo>(`${this.apiUrl}/todos/${id}`);
}




// Changes Complated:
changesComplated(completed:any,id:any){
  return this.HttpClient.put<Todo>(`${this.apiUrl}/todos/${id}`, {completed:!completed})}
}
