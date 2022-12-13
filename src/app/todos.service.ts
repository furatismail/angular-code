import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom, Observable } from 'rxjs';
import { Todo } from './interfaces/todo.interface';

@Injectable({
  providedIn: 'root'
})
export class TodosService {

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<Array<Todo>> {
    return this.httpClient.get<Array<Todo>>('https://jsonplaceholder.typicode.com/todos')
  }

  getAllAsync(): Promise<Array<Todo>> {
    return lastValueFrom(this.httpClient.get<Array<Todo>>('https://jsonplaceholder.typicode.com/todos'));
  }
}
