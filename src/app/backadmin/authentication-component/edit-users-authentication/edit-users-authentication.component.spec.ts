import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditUsersAuthenticationComponent } from './edit-users-authentication.component';

describe('EditUsersAuthenticationComponent', () => {
  let component: EditUsersAuthenticationComponent;
  let fixture: ComponentFixture<EditUsersAuthenticationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditUsersAuthenticationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditUsersAuthenticationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
