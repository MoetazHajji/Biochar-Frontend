import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForgotPasswordAuthenticationComponent } from './forgot-password-authentication.component';

describe('ForgotPasswordAuthenticationComponent', () => {
  let component: ForgotPasswordAuthenticationComponent;
  let fixture: ComponentFixture<ForgotPasswordAuthenticationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForgotPasswordAuthenticationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ForgotPasswordAuthenticationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
