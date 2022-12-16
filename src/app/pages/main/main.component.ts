import { Component, OnInit } from '@angular/core';
import { DataSharingService } from 'src/app/data-sharing.service';
import { Todo } from 'src/app/interfaces/todo.interface';
import { TodosService } from 'src/app/todos.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent implements OnInit {
  title: string = 'ahoj';
  todos: Array<Todo> = [];


  constructor(private todosService: TodosService, private dataSharingService: DataSharingService) {
    console.log('Constructor')
    console.log(this.title);
  }

  ngOnInit(): void {
  }

  async callApi2() {
    const response = await this.todosService.getAllAsync();
    console.log(response)
    this.todos = response;
    const todo = response[0];
    this.dataSharingService.emitData(todo);
  }

}
