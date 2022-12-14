import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from '../pages/about-us/about-us.component';
import { MainComponent } from '../pages/main/main.component';
import { ParentComponent } from '../pages/parent-child/parent/parent.component';
import { SignUpComponent } from '../pages/sign-up/sign-up.component';

const routes: Routes = [
  {
    path: "",
    pathMatch: "full",
    redirectTo: "main"
  },
  {
    path: "main",
    component: MainComponent
  },
  {
    path: "about-us",
    component: AboutUsComponent
  },
  {
    path: "sign-up",
    component: SignUpComponent
  },
  {
    path: "parent-child",
    component: ParentComponent
  },
  {
    path: "products",
    loadChildren: () => import('../pages/products/products.module').then(module => module.ProductsModule)
  }
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class RoutingModule { }
