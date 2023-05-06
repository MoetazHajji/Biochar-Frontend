import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignInAuthenticationComponent } from './sign-in-authentication.component';

describe('SignInAuthenticationComponent', () => {
  let component: SignInAuthenticationComponent;
  let fixture: ComponentFixture<SignInAuthenticationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignInAuthenticationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignInAuthenticationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
