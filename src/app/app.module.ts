import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FullNamePipe } from './pipes/fullname.pipe';
import { AccountTypePipe } from './pipes/account-type.pipe';

@NgModule({
  declarations: [
    AppComponent,
    AccountTypePipe,
    FullNamePipe,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
