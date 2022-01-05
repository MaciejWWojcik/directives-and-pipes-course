import { Directive, ElementRef, HostBinding, OnInit } from '@angular/core';

@Directive({
  selector: 'card-title, [cardTitle]'
})
export class CardTitleDirective {
  @HostBinding('class') class = 'card-title';
}

@Directive({
  selector: 'card-subtitle, [cardSubtitle]'
})
export class CardSubTitleDirective {
  @HostBinding('class') class = 'card-subtitle';
}

@Directive({
  selector: 'card-image, [cardImage]'
})
export class CardImageDirective {
  @HostBinding('class') class = 'card-image';
}

@Directive({
  selector: 'card-description, [cardDescription]'
})
export class CardDescriptionDirective {
  @HostBinding('class') class = 'card-description';
}
