import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlankComponent } from '../blank/blank.component';
import { AboutUsComponent } from '../pages/about-us/about-us.component';
import { LoginComponent } from '../pages/login/login.component';
import { EditComponent } from '../pages/main/edit/edit.component';
import { MainComponent } from '../pages/main/main.component';
import { AdminComponent } from '../pages/main/new/admin/admin.component';
import { NewComponent } from '../pages/main/new/new.component';
import { ParentComponent } from '../pages/parent-child/parent/parent.component';
import { ReactiveSignUpComponent } from '../pages/reactive-sign-up/reactive-sign-up.component';
import { SignUpComponent } from '../pages/sign-up/sign-up.component';
import { TemplateArrayComponent } from '../pages/template-array/template-array.component';
import { WithLayoutComponent } from '../with-layout/with-layout.component';

const routes: Routes = [
  {
    path: "",
    pathMatch: "full",
    redirectTo: "system/main"
  },

  {
    path: "login",
    component: BlankComponent,
    children: [
      {
        path: "",
        component: LoginComponent
      }
    ]
  },

  {
    path: "system",
    component: WithLayoutComponent,
    children: [
      {
        path: "main",
        component: MainComponent,
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
        path: "template-array",
        component: TemplateArrayComponent
      },
      {
        path: "reactive-sign-up",
        component: ReactiveSignUpComponent
      },

      {
        path: "products",
        loadChildren: () => import('../pages/products/products.module').then(module => module.ProductsModule)
      }
    ]
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
