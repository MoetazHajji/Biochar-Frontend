import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalysisStatistiqueComponent } from './analysis-statistique.component';

describe('AnalysisStatistiqueComponent', () => {
  let component: AnalysisStatistiqueComponent;
  let fixture: ComponentFixture<AnalysisStatistiqueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnalysisStatistiqueComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnalysisStatistiqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
