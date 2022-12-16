import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { SidebarModule } from 'src/app/components/sidebar/sidebar.module';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { MyIconPipe } from './my-icon.pipe';
import { EditComponent } from './edit/edit.component';
import { RouterModule } from '@angular/router';
import { NewComponent } from './new/new.component';
import { AdminComponent } from './new/admin/admin.component';

@NgModule({
  declarations: [MainComponent, MyIconPipe, EditComponent, NewComponent, AdminComponent],
  imports: [
    CommonModule,
    SidebarModule,
    MatButtonModule,
    MatIconModule,
    RouterModule
  ],
  exports: [MainComponent]
})
export class MainModule { }
