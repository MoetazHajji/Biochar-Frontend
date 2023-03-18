import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BackadminComponent } from './backadmin.component';

describe('BackadminComponent', () => {
  let component: BackadminComponent;
  let fixture: ComponentFixture<BackadminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BackadminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BackadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
