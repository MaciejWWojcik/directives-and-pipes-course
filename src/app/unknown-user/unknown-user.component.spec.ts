import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnknownUserComponent } from './unknown-user.component';

describe('UnknownUserComponent', () => {
  let component: UnknownUserComponent;
  let fixture: ComponentFixture<UnknownUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnknownUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UnknownUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
