import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TemplateArrayComponent } from './template-array.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    TemplateArrayComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class TemplateArrayModule { }
