import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateTesttComponent } from './update-testt.component';

describe('UpdateTesttComponent', () => {
  let component: UpdateTesttComponent;
  let fixture: ComponentFixture<UpdateTesttComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateTesttComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateTesttComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
