import { FormControl } from "@angular/forms";
import { catchError, map, of, switchMap, timer } from "rxjs";
import { EmailService } from "src/app/email.service";

export class CustomAsyncValidators {
    static duplicity(emailService: EmailService) {
        return (control: FormControl) => {
            // to api na kontrolu duplikatu emailu
            const value = control.value;
            const debounce = 3000;
            return timer(debounce)
                .pipe(
                    switchMap(() => emailService.checkDuplicity(value)),
                    map((response: { valid: boolean }) => {
                        if (response.valid === true) {
                            return null
                        }
                        return {
                            duplicityError: true
                        }
                    }),
                    catchError((error: any) => {
                        console.log(error)
                        return of({
                            duplicityError: true
                        }) 
                    })
                )
        }
    }
}