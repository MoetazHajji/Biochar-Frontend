import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignUpAuthenticationComponent } from './sign-up-authentication.component';

describe('SignUpAuthenticationComponent', () => {
  let component: SignUpAuthenticationComponent;
  let fixture: ComponentFixture<SignUpAuthenticationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignUpAuthenticationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignUpAuthenticationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
