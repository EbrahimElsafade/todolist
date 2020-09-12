import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/observable';
import { environment } from '../../environments/environment';
import { TodoList } from '../models/TodoList';

const httpOptions = {
  headers: new HttpHeaders({'Content-type': 'application/json'})
}

@Injectable({
  providedIn: 'root'
})
export class TodoListService {
  todoUrl: string = `${environment.webAPIURL}data`;
  constructor(private http: HttpClient) { }

  getTodo() : Observable<TodoList[]> {
    return this.http.get<TodoList[]>(this.todoUrl);
  }

  saveTodo(todo: TodoList): Observable<TodoList>{
    return this.http.post<TodoList>(this.todoUrl, todo, httpOptions);
  }

  updateTodo(todo: TodoList): Observable<TodoList> {
    const url = `${this.todoUrl}/${todo.id}`;
    return this.http.put<TodoList>(url, todo, httpOptions);
  }

  removeTodo(todo: TodoList | number): Observable<TodoList> {
    const id = typeof todo === 'number' ? todo : todo.id;
    const url = `${this.todoUrl}/${id}`;

    return this.http.delete<TodoList>(url, httpOptions)
  }

}
