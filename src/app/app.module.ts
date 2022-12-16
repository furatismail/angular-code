import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HeaderModule } from './components/header/header.module';
import { SidebarModule } from './components/sidebar/sidebar.module';
import { MainModule } from './pages/main/main.module';
import { RoutingModule } from './routing/routing.module';
import { UiModule } from './ui/ui.module';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutComponent } from './layout/layout.component'
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import { SignUpModule } from './pages/sign-up/sign-up.module';
import { ParentChildModule } from './pages/parent-child/parent-child.module';
import { TemplateArrayModule } from './pages/template-array/template-array.module';
import { ReactiveSignUpModule } from './pages/reactive-sign-up/reactive-sign-up.module';
import { LoginModule } from './pages/login/login.module';
import { BlankComponent } from './blank/blank.component';
import { WithLayoutComponent } from './with-layout/with-layout.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    BlankComponent,
    WithLayoutComponent,
  ],
  imports: [
    BrowserModule,
    UiModule,
    HeaderModule,
    SidebarModule,
    MainModule,
    RoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatToolbarModule,
    SignUpModule,
    ParentChildModule,
    TemplateArrayModule,
    ReactiveSignUpModule,
    LoginModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
