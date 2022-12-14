import { Component, OnInit } from '@angular/core';
import { DataSharingService } from 'src/app/data-sharing.service';
import { Todo } from 'src/app/interfaces/todo.interface';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css'],
})
export class AboutUsComponent implements OnInit {
  todo!: Todo | null;

  constructor(private dataSharingService: DataSharingService) {

  }

  ngOnInit() {
    this.dataSharingService.currentData.subscribe((response) => {
      console.log(response);
      this.todo = response
    })
  }
}
