import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { SidebarModule } from 'src/app/components/sidebar/sidebar.module';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [MainComponent],
  imports: [
    CommonModule,
    SidebarModule,
    MatButtonModule
  ],
  exports: [MainComponent]
})
export class MainModule { }
