import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import {SearchUserService} from './services/search-user.service';
import { AppComponent } from './app.component';
import { UserCardComponent } from './user-card/user-card.component';


@NgModule({
  declarations: [
    AppComponent,
    UserCardComponent
  ],
  imports: [
    BrowserModule, HttpClientModule
  ],
  providers: [SearchUserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
