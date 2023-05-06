import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PdfextractorComponent } from './pdfextractor.component';

describe('PdfextractorComponent', () => {
  let component: PdfextractorComponent;
  let fixture: ComponentFixture<PdfextractorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PdfextractorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PdfextractorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
