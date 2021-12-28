import {
  Directive,
  OnInit,
  EventEmitter,
  HostListener,
  Input,
  Output,
  TemplateRef,
  ViewContainerRef, OnChanges
} from '@angular/core';
import { UserService } from '../services/user.service';
import { UserRole } from '../models/user-role';
import { Subscription } from 'rxjs';

@Directive({
  selector: '[appForRoles]'
})
export class ForRolesDirective implements OnChanges {

  @Input('appForRoles') allowedRoles!: (UserRole | string)[];

  private subscription: Subscription = new Subscription();

  constructor(
    private userService: UserService,
    private templateRef: TemplateRef<any>,
    private viewContainerRef: ViewContainerRef,
  ) {
  }

  ngOnChanges() {
    // clear any existing subscriptions
    this.subscription.unsubscribe();
    this.subscription = new Subscription();

    // react on role changes to render or hide elements
    const sub = this.userService.userRole$.subscribe(role => {
      if (this.allowedRoles.includes(role)) {
        this.viewContainerRef.clear();
        this.viewContainerRef.createEmbeddedView(this.templateRef);
      } else {
        this.viewContainerRef.clear();
      }
    });

    // add current subscription to the list
    this.subscription.add(sub);
  }
}
