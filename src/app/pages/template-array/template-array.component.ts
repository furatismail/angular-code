import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-array',
  templateUrl: './template-array.component.html',
  styleUrls: ['./template-array.component.css']
})
export class TemplateArrayComponent {

  dogs: Array<{ dogName: string }> = [
    { dogName: "Max" },
    { dogName: "Karl" }
  ]

  submit(f: NgForm): void {
    const data: Record<string, { dogName: string }> = f.value;
    console.log(data)
    //"0": {dogName: "Max"}, "1": {dogName: "Karl"} => [{dogName: "Max"}, {dogName: "Karl"}]
    const arr: Array<{ dogName: string }> = Object.keys(data).map((index) => data[index]);
    console.log(arr)
  }

  plus(): void {
    this.dogs = [...this.dogs, { dogName: "" }];
  }

}
