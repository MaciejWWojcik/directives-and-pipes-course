import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { ButtonComponent } from './button/button.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { IconSuffixDirective } from './icon-suffix.directive';
import { IconPrefixDirective } from './icon-prefix.directive';
import { ButtonTitleDirective } from './button-title.directive';

@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    IconSuffixDirective,
    IconPrefixDirective,
    ButtonTitleDirective,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    FontAwesomeModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
