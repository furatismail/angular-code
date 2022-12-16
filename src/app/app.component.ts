import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  cart: Array<string> = [];
  title = 'Ahoj z app komponenty'

  films = [
    "Vetřelec vs Predator 1",
    "Vetřelec vs Predator 2",
    "Vetřelec vs Predator 3"
  ]

  constructor(private authService: AuthService, private router: Router) {

  }

  ngOnInit() {
    const token = localStorage.getItem("token");
    //api call...
    if(token) {
      this.authService.tokenSubject$.next({token});
      this.router.navigate(['/system/main']);
    }
  }

  updateCart($event: string) {
    console.log($event);
    this.cart = [...this.cart, $event];
  }

}
