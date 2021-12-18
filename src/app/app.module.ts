import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PremiumOnlyDirective } from './directives/premium-only.directive';

@NgModule({
  declarations: [
    AppComponent,
    PremiumOnlyDirective,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
