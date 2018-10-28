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
import { ApresentationComponent } from './apresentation/apresentation.component';
import { RegisterComponent } from './register/register.component';
import { SearchComponent } from './register/search/search.component';
import { HttpClientModule } from '@angular/common/http';
import { CardComponent } from './register/card/card.component';
import { YoutubeComponent } from './register/account/youtube/youtube.component';
import { DomainComponent } from './register/account/domain/domain.component';
import { FacebookComponent } from './register/account/facebook/facebook.component';
import { TwitterComponent } from './register/account/twitter/twitter.component';
import { InstagramComponent } from './register/account/instagram/instagram.component';
import { GmailComponent } from './register/account/gmail/gmail.component';
import { HotmailComponent } from './register/account/hotmail/hotmail.component';
import { InpiComponent } from './register/account/inpi/inpi.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    MainComponent,
    TopComponent,
    HeadComponent,
    FooterComponent,
    MenuComponent,
    ApresentationComponent,
    RegisterComponent,
    SearchComponent,
    CardComponent,
    YoutubeComponent,
    DomainComponent,
    FacebookComponent,
    TwitterComponent,
    InstagramComponent,
    GmailComponent,
    HotmailComponent,
    InpiComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
