import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TimeoffService } from '../../_services/_user/timeoff.service';

@Component({
  selector: 'app-timeoffmodal',
  templateUrl: './timeoffmodal.component.html',
  styleUrls: ['./timeoffmodal.component.css']
})
export class TimeoffmodalComponent implements OnInit {
  @Input() modalConfirmState : boolean = false;
  @Input() title?: string;
  @Input() message?: string;
  @Input() public type?: string;
  @Output() confirmModalNoEvent=new EventEmitter<boolean>(); 
  @Output() confirmModalYesEvent=new EventEmitter<boolean>(); 
  constructor( ) {    }

  ngOnInit(): void {}
  onClickYes(){ 
    this.modalConfirmState = false; 
    
    this.confirmModalYesEvent.emit(this.modalConfirmState); 
  }
  onClickNo(){  
    this.modalConfirmState = false;  
    this.confirmModalNoEvent.emit(this.modalConfirmState); 
  }
}

