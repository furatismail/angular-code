import { Component } from '@angular/core';
import { TodosService } from 'src/app/todos.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
  data: any;
  constructor(private todosService: TodosService) {

  }

  callApi() {
    //  this.todosService.getAll().subscribe((response) => console.log(response));
    this.todosService.getExampleObservable().subscribe((res: any) => {
      console.log(res)
      this.data = res
    })
  }

  async callApi2() {
    const response = await this.todosService.getAllAsync();
    console.log(response)
  }
}
