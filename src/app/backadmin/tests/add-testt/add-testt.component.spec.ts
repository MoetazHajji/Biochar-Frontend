import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTesttComponent } from './add-testt.component';

describe('AddTesttComponent', () => {
  let component: AddTesttComponent;
  let fixture: ComponentFixture<AddTesttComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddTesttComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddTesttComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
