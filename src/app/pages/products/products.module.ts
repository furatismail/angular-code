import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products.component';
import { RouterModule, Routes } from '@angular/router';
import { SidebarModule } from 'src/app/components/sidebar/sidebar.module';

const routes: Routes = [
  {
    path: "",
    component: ProductsComponent
  }
]

@NgModule({
  declarations: [
    ProductsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SidebarModule
  ]
})
export class ProductsModule { }
