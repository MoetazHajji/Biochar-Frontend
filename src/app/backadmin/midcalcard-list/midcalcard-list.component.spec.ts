import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MidcalcardListComponent } from './midcalcard-list.component';

describe('MidcalcardListComponent', () => {
  let component: MidcalcardListComponent;
  let fixture: ComponentFixture<MidcalcardListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MidcalcardListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MidcalcardListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
