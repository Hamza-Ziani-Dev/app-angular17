import { Component } from '@angular/core';
import { Todo } from '../../models/todo';
import { ActivatedRoute, Router } from '@angular/router';
import { TodoService } from './../../services/todo.service';

@Component({
  selector: 'app-to-do-list-detail',
  standalone: true,
  imports: [],
  templateUrl: './to-do-list-detail.component.html',
  styleUrl: './to-do-list-detail.component.css'
})
export class ToDoListDetailComponent {
todo :Todo | undefined;
  constructor(
    private TodoService: TodoService, private route : ActivatedRoute, private router : Router
  ){

  }



  ngOnInit(): void {
    this.getTodo();
    
  }

  getTodo(){
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.TodoService.getOneTodo(id).subscribe((todo) => {
      this.todo = todo
       console.log(this.todo);
       
    })
  }

}
