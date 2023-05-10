import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditTimeoffComponent } from './edit-timeoff.component';

describe('EditTimeoffComponent', () => {
  let component: EditTimeoffComponent;
  let fixture: ComponentFixture<EditTimeoffComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditTimeoffComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditTimeoffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
