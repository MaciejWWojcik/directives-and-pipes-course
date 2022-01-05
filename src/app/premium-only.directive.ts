import { Directive, ElementRef, Input, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';
import { Account } from './model/account';

@Directive({
  selector: '[appPremiumOnly]'
})
export class PremiumOnlyDirective implements OnInit {

  @Input('appPremiumOnly') account!: Account;
  @Input('appPremiumOnlyElse') alternativeTemplate?: TemplateRef<any>;

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainerRef: ViewContainerRef,
  ) {
  }

  ngOnInit() {
    if (this.account.premium) {
      this.viewContainerRef.clear();
      this.viewContainerRef.createEmbeddedView(this.templateRef);
    } else {
      this.viewContainerRef.clear();

      if (this.alternativeTemplate) {
        this.viewContainerRef.createEmbeddedView(this.alternativeTemplate);
      }
    }
  }
}
