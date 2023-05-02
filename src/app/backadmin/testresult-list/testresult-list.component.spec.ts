import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestresultListComponent } from './testresult-list.component';

describe('TestresultListComponent', () => {
  let component: TestresultListComponent;
  let fixture: ComponentFixture<TestresultListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestresultListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestresultListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
