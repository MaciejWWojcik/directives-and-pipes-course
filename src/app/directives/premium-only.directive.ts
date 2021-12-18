import {
  Directive,
  OnInit,
  EventEmitter,
  HostListener,
  Input,
  Output,
  TemplateRef,
  ViewContainerRef
} from '@angular/core';
import { AccountService } from '../services/account.service';

@Directive({
  selector: '[appPremiumOnly]'
})
export class PremiumOnlyDirective implements OnInit {

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainerRef: ViewContainerRef,
    private accountService: AccountService,
  ) {
  }

  ngOnInit() {
    const account = this.accountService.currentAccount;

    if (account.premium) {
      this.viewContainerRef.createEmbeddedView(this.templateRef);
    } else {
      this.viewContainerRef.clear();
    }
  }
}
