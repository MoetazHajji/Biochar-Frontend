import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsHrAccountComponent } from './details-hr-account.component';

describe('DetailsHrAccountComponent', () => {
  let component: DetailsHrAccountComponent;
  let fixture: ComponentFixture<DetailsHrAccountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsHrAccountComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailsHrAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
