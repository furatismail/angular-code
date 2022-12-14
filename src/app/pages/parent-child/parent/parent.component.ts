import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {
  data: Array<any> = [
    {userName: "Karel"},
    {userName: "Petr"},
    {userName: "Ivan"}
  ]
}
