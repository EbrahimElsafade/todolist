import { Component, OnInit } from "@angular/core";
import { TodoListService } from "../../services/todo.service";

import { TodoList } from "../../models/TodoList";


@Component({
  selector: "app-todoList",
  templateUrl: "./todoList.component.html",
  styleUrls: ["./todoList.component.scss"],
})
export class TodoListComponent implements OnInit {
  active: boolean = false;
  clicked: boolean = false;
  todosList: TodoList[];
  currentTodoList: TodoList = {
    id: 0,
    title: "",
    completed: false
  };

  isEdit: boolean = false;

  constructor( private todoService: TodoListService) {}

  ngOnInit(): void {
    this.todoService.getTodo().subscribe((todosList: any) => {
      this.todosList = todosList;
      console.log(todosList);
    });
  }

  refreshCss(add: boolean) {
    this.active = add ? true : false;
  }

  onNewTodo(todo) {
    this.todosList.unshift(todo);
  }

  editTodo(todo) {
    this.currentTodoList = todo;
    this.isEdit = true;
    this.active = true;
  }

  onUpdatedTodo(todo) {
    this.todosList.forEach((cur, index) => {
      if (todo.id === cur.id) {
        this.todosList.splice(index, 1);
        this.todosList.unshift(todo);
        this.isEdit = false;
        this.currentTodoList = {
          id: 0,
          title: "",
          completed: false
        };
      }
    });
  }

  checkboxClicked(todoitem) {
    this.todoService.updateTodo(todoitem).subscribe();
  }

  removeTodo(todo: TodoList) {
    if (confirm("Are you sure?")) {
      this.todoService.removeTodo(todo.id).subscribe(() => {
        this.todosList.forEach((cur, index) => {
          if (todo.id === cur.id) {
            this.todosList.splice(index, 1);
          }
        });
      });
    }
  }

}
