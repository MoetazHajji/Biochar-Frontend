import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalEditUsersAuthenticationComponent } from './modal-edit-users-authentication.component';

describe('ModalEditUsersAuthenticationComponent', () => {
  let component: ModalEditUsersAuthenticationComponent;
  let fixture: ComponentFixture<ModalEditUsersAuthenticationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalEditUsersAuthenticationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalEditUsersAuthenticationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
