import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Todo } from './interfaces/todo.interface';

@Injectable({
  providedIn: 'root'
})
export class DataSharingService {
  private dataSource: BehaviorSubject<Todo | null> = new BehaviorSubject<Todo | null>(null);
  currentData: Observable<Todo | null> = this.dataSource.asObservable();

  constructor() { }

  emitData(todo: Todo) : void {
    this.dataSource.next(todo);
  }
}
