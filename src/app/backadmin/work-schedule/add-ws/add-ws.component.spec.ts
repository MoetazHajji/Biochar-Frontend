import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddWsComponent } from './add-ws.component';

describe('AddWsComponent', () => {
  let component: AddWsComponent;
  let fixture: ComponentFixture<AddWsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddWsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddWsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
