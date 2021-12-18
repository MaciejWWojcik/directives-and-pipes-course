import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ForRoleOnlyDirective } from './directives/for-role-only.directive';

@NgModule({
  declarations: [
    AppComponent,
    ForRoleOnlyDirective,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
