import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditGlobalAccountComponent } from './edit-global-account.component';

describe('EditGlobalAccountComponent', () => {
  let component: EditGlobalAccountComponent;
  let fixture: ComponentFixture<EditGlobalAccountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditGlobalAccountComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditGlobalAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
