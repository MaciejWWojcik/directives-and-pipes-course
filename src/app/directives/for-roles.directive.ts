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
import { UserService } from '../services/user.service';
import { UserRole } from '../models/user-role';

@Directive({
  selector: '[appForRoles]'
})
export class ForRolesDirective implements OnInit {

  @Input('appForRoles') allowedRoles!: (UserRole | string)[];

  constructor(
    private userService: UserService,
    private templateRef: TemplateRef<any>,
    private viewContainerRef: ViewContainerRef,
  ) {
  }

  ngOnInit() {
    this.userService.userRole$.subscribe(role => {
      if (this.allowedRoles.includes(role)) {
        this.viewContainerRef.clear();
        this.viewContainerRef.createEmbeddedView(this.templateRef);
      } else {
        this.viewContainerRef.clear();
      }
    })
  }
}
