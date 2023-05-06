import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsSampleComponent } from './details-sample.component';

describe('DetailsSampleComponent', () => {
  let component: DetailsSampleComponent;
  let fixture: ComponentFixture<DetailsSampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsSampleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailsSampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
