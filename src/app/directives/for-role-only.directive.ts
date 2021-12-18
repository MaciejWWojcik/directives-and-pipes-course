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

  // TODO get data about user role

  constructor(
    private accountService: AccountService,
  ) {
  }

  ngOnInit() {
    // TODO show element if acceptable role matches user role
  }
}
