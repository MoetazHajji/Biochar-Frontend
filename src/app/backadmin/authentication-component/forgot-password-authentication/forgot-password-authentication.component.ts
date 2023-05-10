import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-forgot-password-authentication',
  templateUrl: './forgot-password-authentication.component.html',
  styleUrls: ['./forgot-password-authentication.component.css']
})
export class ForgotPasswordAuthenticationComponent implements OnInit {
  @Input() modalConfirmState : boolean = false;  
  stremail! : string;  
  @Output() ModalCloseEvent=new EventEmitter<boolean>();  
  @Output() ModalSendEvent=new EventEmitter<string>();  
  constructor() { }

  ngOnInit(): void {
  }
  onClickNo(){  
    this.modalConfirmState = false;  
    this.ModalCloseEvent.emit(this.modalConfirmState); 
  }
  onClickSend(){  
    this.modalConfirmState = false;  
    this.ModalCloseEvent.emit(this.modalConfirmState); 
    this.ModalSendEvent.emit(this.stremail); 
  }
}
