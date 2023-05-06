import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsTimeoffComponent } from './details-timeoff.component';

describe('DetailsTimeoffComponent', () => {
  let component: DetailsTimeoffComponent;
  let fixture: ComponentFixture<DetailsTimeoffComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsTimeoffComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailsTimeoffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
