import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeoffmodalComponent } from './timeoffmodal.component';

describe('TimeoffmodalComponent', () => {
  let component: TimeoffmodalComponent;
  let fixture: ComponentFixture<TimeoffmodalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimeoffmodalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TimeoffmodalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
