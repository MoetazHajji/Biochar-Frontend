import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTestresultComponent } from './add-testresult.component';

describe('AddTestresultComponent', () => {
  let component: AddTestresultComponent;
  let fixture: ComponentFixture<AddTestresultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddTestresultComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddTestresultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
