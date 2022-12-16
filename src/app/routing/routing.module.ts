import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../auth.guard';
import { BlankComponent } from '../blank/blank.component';
import { AboutUsComponent } from '../pages/about-us/about-us.component';
import { LoginComponent } from '../pages/login/login.component';
import { MainComponent } from '../pages/main/main.component';
import { ParentComponent } from '../pages/parent-child/parent/parent.component';
import { ReactiveSignUpComponent } from '../pages/reactive-sign-up/reactive-sign-up.component';
import { SignUpComponent } from '../pages/sign-up/sign-up.component';
import { TemplateArrayComponent } from '../pages/template-array/template-array.component';
import { WithLayoutComponent } from '../with-layout/with-layout.component';

const routes: Routes = [
  {
    path: "",
    pathMatch: "full",
    redirectTo: "login"
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
        canActivate: [AuthGuard]
      },
      {
        path: "about-us",
        component: AboutUsComponent,
        canActivate: [AuthGuard]
      },
      {
        path: "sign-up",
        component: SignUpComponent,
        canActivate: [AuthGuard]
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
