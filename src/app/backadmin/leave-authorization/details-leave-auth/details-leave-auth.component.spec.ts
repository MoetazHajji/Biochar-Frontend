import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsLeaveAuthComponent } from './details-leave-auth.component';

describe('DetailsLeaveAuthComponent', () => {
  let component: DetailsLeaveAuthComponent;
  let fixture: ComponentFixture<DetailsLeaveAuthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsLeaveAuthComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailsLeaveAuthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
