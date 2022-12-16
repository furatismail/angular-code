import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  public loginForm: any = {
    userName: "",
    password: ""
  }

  onSubmit(f: NgForm) {
    console.log(f.value);
  }
}
