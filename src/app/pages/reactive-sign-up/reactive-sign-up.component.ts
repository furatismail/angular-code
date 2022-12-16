import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { debounce, debounceTime } from 'rxjs';
import { EmailService } from 'src/app/email.service';
import { UserService } from 'src/app/user.service';
import { CustomAsyncValidators } from './custom-async-validators';
import { CustomValidators } from './custom-validators';

@Component({
  selector: 'app-reactive-sign-up',
  templateUrl: './reactive-sign-up.component.html',
  styleUrls: ['./reactive-sign-up.component.css']
})
export class ReactiveSignUpComponent implements OnInit {
  user!: FormGroup;
  isSubmitted: boolean = false;

  get name(): FormControl {
    return this.user.get('name') as FormControl;
  }

  get skills(): FormArray {
    return this.user.get('skills') as FormArray;
  }

  constructor(private fb: FormBuilder, private emailService: EmailService, private userService: UserService) {

  }

  async ngOnInit() {
    // this.user = new FormGroup({
    //   name: new FormControl("Josef", [Validators.required, Validators.minLength(2)]),
    //   account: new FormGroup({
    //     email: new FormControl("", [Validators.required]),
    //     confirm: new FormControl("")
    //   })
    // })

    this.user = this.fb.group({
      name: ["", [Validators.required, Validators.minLength(2)]],
      account: this.fb.group({
        email: ["", [Validators.required]],
        confirm: ["", [Validators.required]]
      }),
      skills: this.fb.array([
        new FormControl('')
      ])
    })

    const res = await this.userService.get('1');
    console.log(res);
    this.user.patchValue(res);
  }

  addSkill() : void {
    this.skills.push(new FormControl(""))
  }

  removeSkill(index: number) : void {
    this.skills.removeAt(index);
  }

  onSubmit() {
    this.name.disable();
    this.isSubmitted = true;
    console.log(this.user)
    console.log(this.user.value)

    if (this.user.valid === true) {
      alert('Odesilam...')
    } else {
      alert('formular nevalidni')
    }
  }

}
