import { Component, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Todo } from 'src/app/interfaces/todo.interface';
import { TodosService } from 'src/app/todos.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnDestroy {
  data: any;
  todos$!: Observable<Array<Todo>>


  private subscription!: Subscription;

  constructor(private todosService: TodosService) {

  }

  callApi() {
    this.todos$ = this.todosService.getAll();

    // this.subscription = this.todosService.getAll().subscribe((response) => console.log(response));
    // this.todosService.getExampleObservable().subscribe((res: any) => {
    //   console.log(res)
    //   this.data = res
    // })
  }

  async callApi2() {
    const response = await this.todosService.getAllAsync();
    console.log(response)
  }

  ngOnDestroy() {
    console.log('run')
    this.subscription.unsubscribe();
  }
}
