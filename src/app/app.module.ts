import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { CardComponent } from './card/card.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  CardDescriptionDirective,
  CardImageDirective,
  CardSubTitleDirective,
  CardTitleDirective
} from './card.directive';


@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    CardTitleDirective,
    CardSubTitleDirective,
    CardImageDirective,
    CardDescriptionDirective,
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
