import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from 'src/app/interfaces/user.interface';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit, AfterViewInit {
  @ViewChild('f') f!: NgForm;

  user: User = {
    name: "",
    account: {
      email: "",
      confirm: ""
    },
    password: ""
  }

  constructor(private userService: UserService) {
  }

  async ngOnInit(): Promise<void> {
    console.log(this.f);
    // this.userService.get('1').then((res) => console.log(res))
    const res = await this.userService.get('1');
    console.log(res);
    this.user = res;
  }

  ngAfterViewInit(): void {
    console.log(this.f);
  }

  validateBlockedValues(value: string) {
    if (!!value && value === 'test') {
      const nameCtrl = this.f.form.controls.name;
      nameCtrl.setErrors({ blockedValue: true })
    }
  }

  async onSubmit({ value, valid }: { value: User, valid: boolean | null }): Promise<void> {
    console.log(this.f);
    if (valid === true) {
      console.log('volam api...')
      await this.save(value);
      console.log('api zavolano...')
    } else {
      console.log('zobrazit errory.........')
    }
  }

  private async save(user: User): Promise<void> {
    try {
      const response = await this.userService.save(user);
      if (response.status === true) {
        alert('Uzivatel ulozen')
      } else {
        alert('Uzivatel se neulozil....')
      }
    } catch (error) {
      //ostatni http statusy
      console.log(error);
      alert('Neco se pokazilo');
    }
  }

}
