import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeaveAuthorizationComponent } from './leave-authorization.component';

describe('LeaveAuthorizationComponent', () => {
  let component: LeaveAuthorizationComponent;
  let fixture: ComponentFixture<LeaveAuthorizationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeaveAuthorizationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LeaveAuthorizationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
