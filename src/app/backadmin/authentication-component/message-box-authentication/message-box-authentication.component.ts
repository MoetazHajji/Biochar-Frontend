import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-message-box-authentication',
  templateUrl: './message-box-authentication.component.html',
  styleUrls: ['./message-box-authentication.component.css']
})
export class MessageBoxAuthenticationComponent implements OnInit {
  @Input() modalConfirmState : boolean = false;
  @Input() title?: string;
  @Input() message?: string;
  @Input() public type?: string;
  @Output() ModalCloseEvent=new EventEmitter<boolean>();  
  constructor() { }

  ngOnInit(): void {
  } 
  onClickNo(){  
    this.modalConfirmState = false;  
    this.ModalCloseEvent.emit(this.modalConfirmState); 
  }
}
