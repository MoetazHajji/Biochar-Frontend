import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTimeoffComponent } from './add-timeoff.component';

describe('AddTimeoffComponent', () => {
  let component: AddTimeoffComponent;
  let fixture: ComponentFixture<AddTimeoffComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddTimeoffComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddTimeoffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
