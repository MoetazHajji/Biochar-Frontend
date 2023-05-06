import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageBoxAuthenticationComponent } from './message-box-authentication.component';

describe('MessageBoxAuthenticationComponent', () => {
  let component: MessageBoxAuthenticationComponent;
  let fixture: ComponentFixture<MessageBoxAuthenticationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MessageBoxAuthenticationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MessageBoxAuthenticationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
