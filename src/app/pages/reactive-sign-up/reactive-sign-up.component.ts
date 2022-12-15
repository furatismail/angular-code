import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-reactive-sign-up',
  templateUrl: './reactive-sign-up.component.html',
  styleUrls: ['./reactive-sign-up.component.css']
})
export class ReactiveSignUpComponent implements OnInit {
  user!: FormGroup;

  ngOnInit(): void {
    this.user = new FormGroup({
      name: new FormControl(""),
      account: new FormGroup({
        email: new FormControl(""),
        confirm: new FormControl("")
      })
    })
  }

  onSubmit() {
    console.log(this.user)
    if (this.user.valid === true) {
      alert('Odesilam...')
    } else {
      alert('formular nevalidni')
    }
  }

}
