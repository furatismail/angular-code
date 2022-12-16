import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { take } from 'rxjs';
import { AuthService } from 'src/app/auth.service';
import { Authenticate } from 'src/app/interfaces/authenticate.interface';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  public loginForm: Authenticate = {
    userName: "",
    password: ""
  }
  // private subscription!: Subscription;

  constructor(private authService: AuthService, private router: Router) {

  }

  onSubmit(f: NgForm) {
    console.log(f.value);
    if (f.valid) {
      const authenticate = f.value as Authenticate;
      this.authService.login(authenticate).pipe(take(1)).subscribe((res) => {
        if (!!res) {
          console.log(res);
          this.router.navigate(['/system/main']);
        }
      })
    }

  }

}
