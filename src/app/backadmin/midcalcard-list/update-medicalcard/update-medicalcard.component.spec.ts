import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateMedicalcardComponent } from './update-medicalcard.component';

describe('UpdateMedicalcardComponent', () => {
  let component: UpdateMedicalcardComponent;
  let fixture: ComponentFixture<UpdateMedicalcardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateMedicalcardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateMedicalcardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
