import { Component } from '@angular/core';
import { DataSharingService } from 'src/app/data-sharing.service';
import { TodosService } from 'src/app/todos.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent {

  constructor(private todosService: TodosService, private dataSharingService: DataSharingService) {
    console.log('Constructor')
  }

  async callApi2() {
    const response = await this.todosService.getAllAsync();
    console.log(response)
    const todo = response[0];
    this.dataSharingService.emitData(todo);
  }

}
