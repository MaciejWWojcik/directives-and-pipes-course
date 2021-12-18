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

@Directive({
  selector: '[appForRoles]'
})
export class ForRolesDirective implements OnInit {

  // TODO get data about acceptable roles

  constructor(
    private accountService: UserService,
  ) {
  }

  // TODO consider using other lifecycle hook if needed:
  ngOnInit() {
    // TODO show element if acceptable roles matches user role
    // TODO clear view if user role doesn't match acceptable roles
  }
}
