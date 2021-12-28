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
  selector: '[appForRoleOnly]'
})
export class ForRoleOnlyDirective implements OnInit {

  @Input('appForRoleOnly') role!: 'premium' | 'standard';

  constructor(
    private accountService: AccountService,
    private templateRef: TemplateRef<any>,
    private viewContainerRef: ViewContainerRef,
  ) {
  }

  ngOnInit() {
    const account = this.accountService.currentAccount;

    const showForPremium = account.premium && this.role === 'premium';
    const showForStandard = !account.premium && this.role === 'standard';

    if (showForPremium || showForStandard) {
      this.viewContainerRef.createEmbeddedView(this.templateRef);
    } else {
      this.viewContainerRef.clear();
    }
  }
}
