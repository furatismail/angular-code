import { Directive, Input } from '@angular/core';
import { NG_VALIDATORS, Validator, FormControl } from '@angular/forms';

@Directive({
  selector: '[appPasswordStr]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: PasswordStrDirective,
      multi: true,
    }
  ]
})
export class PasswordStrDirective implements Validator {
  @Input() minLengthValue!: string

  constructor() {
    console.log('DIREKTIVA')
  }

  validate(control: FormControl) {
    const value = control.value;
    console.log('control: ', control)

    const hasNumberCheckState = this.hasNumberCheck(value);
    console.log('hasNumberCheckState', hasNumberCheckState)
    const minLengthCheckState = this.minLengthCheck(value);
    console.log('minLengthCheckState', minLengthCheckState)

    if (hasNumberCheckState === true && minLengthCheckState === true) {
      return null;
    }

    return {
      passwordInvalid: true
    }

  }

  // jestli heslo ma cisla
  private hasNumberCheck(value: string): boolean {
    return /\d/.test(value);
  }

  // jestli heslo ma alespon vice nez 6 znaku
  private minLengthCheck(value: string): boolean {
    if (value?.length >= parseInt(this.minLengthValue)) {
      return true
    }
    return false;
  }

}
