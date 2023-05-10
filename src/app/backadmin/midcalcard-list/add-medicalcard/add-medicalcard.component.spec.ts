import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMedicalcardComponent } from './add-medicalcard.component';

describe('AddMedicalcardComponent', () => {
  let component: AddMedicalcardComponent;
  let fixture: ComponentFixture<AddMedicalcardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddMedicalcardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddMedicalcardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
