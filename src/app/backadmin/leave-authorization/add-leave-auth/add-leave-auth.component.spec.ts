import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddLeaveAuthComponent } from './add-leave-auth.component';

describe('AddLeaveAuthComponent', () => {
  let component: AddLeaveAuthComponent;
  let fixture: ComponentFixture<AddLeaveAuthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddLeaveAuthComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddLeaveAuthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
