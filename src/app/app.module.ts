import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LogClickDirective } from './directives/log-click.directive';
import { LogHoverDirective } from './directives/log-hover.directive';

@NgModule({
  declarations: [
    AppComponent,
    LogClickDirective,
    LogHoverDirective,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
