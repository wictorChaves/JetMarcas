import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './/app-routing.module';
import { AboutComponent } from './about/about.component';
import { MainComponent } from './main/main.component';
import { TopComponent } from './main/top/top.component';
import { HeadComponent } from './main/head/head.component';
import { FooterComponent } from './main/footer/footer.component';
import { MenuComponent } from './main/top/menu/menu.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    MainComponent,
    TopComponent,
    HeadComponent,
    FooterComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
