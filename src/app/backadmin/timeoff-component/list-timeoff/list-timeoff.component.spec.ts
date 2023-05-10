import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListTimeoffComponent } from './list-timeoff.component';

describe('ListTimeoffComponent', () => {
  let component: ListTimeoffComponent;
  let fixture: ComponentFixture<ListTimeoffComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListTimeoffComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListTimeoffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
