import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HeaderModule } from './components/header/header.module';
import { SidebarModule } from './components/sidebar/sidebar.module';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { MainComponent } from './pages/main/main.component';
import { MainModule } from './pages/main/main.module';
import { UiModule } from './ui/ui.module';

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
  }
]

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    UiModule,
    HeaderModule,
    SidebarModule,
    MainModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
 }
