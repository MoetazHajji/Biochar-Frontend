import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadModalImgAccountComponent } from './upload-modal-img-account.component';

describe('UploadModalImgAccountComponent', () => {
  let component: UploadModalImgAccountComponent;
  let fixture: ComponentFixture<UploadModalImgAccountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UploadModalImgAccountComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UploadModalImgAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
