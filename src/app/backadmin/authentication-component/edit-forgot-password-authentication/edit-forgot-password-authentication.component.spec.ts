import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditForgotPasswordAuthenticationComponent } from './edit-forgot-password-authentication.component';

describe('EditForgotPasswordAuthenticationComponent', () => {
  let component: EditForgotPasswordAuthenticationComponent;
  let fixture: ComponentFixture<EditForgotPasswordAuthenticationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditForgotPasswordAuthenticationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditForgotPasswordAuthenticationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
