import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveSignUpComponent } from './reactive-sign-up.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ReactiveSignUpComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ]
})
export class ReactiveSignUpModule { }
