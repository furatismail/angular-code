import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { SidebarModule } from 'src/app/components/sidebar/sidebar.module';

@NgModule({
  declarations: [MainComponent],
  imports: [
    CommonModule,
    SidebarModule
  ],
  exports: [MainComponent]
})
export class MainModule { }
