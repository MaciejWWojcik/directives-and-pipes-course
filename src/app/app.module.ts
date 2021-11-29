import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PremiumUserComponent } from './premium-user/premium-user.component';
import { StandardUserComponent } from './standard-user/standard-user.component';
import { UnknownUserComponent } from './unknown-user/unknown-user.component';

@NgModule({
  declarations: [
    AppComponent,
    PremiumUserComponent,
    StandardUserComponent,
    UnknownUserComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
