import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Ahoj z app komponenty'

  films = [
    "Vetřelec vs Predator 1",
    "Vetřelec vs Predator 2",
    "Vetřelec vs Predator 3"
  ]

  constructor() {
    console.log('Hello')
  }

}
