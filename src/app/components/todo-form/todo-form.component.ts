import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { TodoListService } from '../../services/todo.service'

import { TodoList } from '../../models/TodoList';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss']
})

export class TodoFormComponent implements OnInit {
  @Output() newTodo: EventEmitter<TodoList> = new EventEmitter();
  @Output() updatedTodo: EventEmitter<TodoList> = new EventEmitter();
  @Output() cssRefresh = new EventEmitter<boolean>();
  @Input() currentTodo: TodoList;
  @Input() isEdit: boolean;





  loader: boolean = false;


  constructor(private todoService: TodoListService) { }

  ngOnInit(): void {
  }

  flipBack(){
    this.cssRefresh.emit(false);
  }

  addTodo(title, completed){
    this.loader = true;
    completed = false;
    if(!title && !completed){
      alert("Please enter data");
      this.loader = false;
    } else{
      this.todoService.saveTodo({title, completed} as TodoList).subscribe(todo => {
        this.newTodo.emit(todo);
        this.currentTodo = {
          id: 0,
          title: '',
          completed: false
        };
        this.loader = false;
        this.cssRefresh.emit(false);
      });
    }
  }

  updateTodo() {
    this.loader = true;
    this.todoService.updateTodo(this.currentTodo).subscribe(todo => {
      this.isEdit = false;
      this.updatedTodo.emit(todo);
      console.log(todo);
      this.loader = false;
      this.cssRefresh.emit(false);
    });
  }

  refreshCss(){
    this.cssRefresh.emit(false);
  }

}
