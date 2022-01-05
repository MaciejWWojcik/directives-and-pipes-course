import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  template: `
    <section>
      <p class="title">
        <ng-content select="card-title"></ng-content>
      </p>

      <p class="subtitle">
        <ng-content select="card-subtitle"></ng-content>
      </p>

      <div class="image">
        <ng-content select="card-image"></ng-content>
      </div>

      <article class="description">
        <ng-content select="card-description"></ng-content>
      </article>
    </section>
  `,
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
}
