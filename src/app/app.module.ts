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

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
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
    TemplateArrayModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
