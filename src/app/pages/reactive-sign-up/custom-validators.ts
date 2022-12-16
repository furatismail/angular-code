import { FormControl } from "@angular/forms";

export class CustomValidators {
    static unique(control: FormControl) {
        // furat.ismail@test.cz
        const email = control.value;
        const domain = email.split('@')[1];

        switch (domain) {
            case 'test.cz':
                return {
                    isNotUnique: true
                }
            default:
                return null;
        }
    }
}