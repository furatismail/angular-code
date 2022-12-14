import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignUpComponent } from './sign-up.component';
import { FormsModule } from '@angular/forms';
import { HighlightModule } from 'src/app/directives/highlight/highlight.module';
import { PasswordStrDirective } from './password-str.directive';

@NgModule({
  declarations: [
    SignUpComponent,
    PasswordStrDirective
  ],
  imports: [
    CommonModule,
    FormsModule,
    HighlightModule
  ],
  exports: []
})
export class SignUpModule { }
