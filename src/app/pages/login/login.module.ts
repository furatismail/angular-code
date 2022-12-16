import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';


// Cil: vytvorit login formular pomoci angular material pomoci template driven způsobu

// 1. Zkopirujte si z linku z githubu (v chatu) ukazkove material komponenty inputů.
// 2. Pridejte na inputy ngModel direktivu a vytvorte state pro formular, ktery bude mit userName a password promennou.
// 3. Pridejte validace required a zobrazovani error hlasek.
// 4. Vytvorte Submit metodu, ktera zobrazi vyplnena data formulare.

@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    MatFormFieldModule,
    FormsModule,
    MatButtonModule,
    MatInputModule
  ]
})
export class LoginModule { }
