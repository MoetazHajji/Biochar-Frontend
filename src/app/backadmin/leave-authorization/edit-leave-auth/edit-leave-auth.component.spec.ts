import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditLeaveAuthComponent } from './edit-leave-auth.component';

describe('EditLeaveAuthComponent', () => {
  let component: EditLeaveAuthComponent;
  let fixture: ComponentFixture<EditLeaveAuthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditLeaveAuthComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditLeaveAuthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
