import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AccountDto } from 'src/app/_models/_user/AccountDto';

@Component({
  selector: 'app-details-account',
  templateUrl: './details-account.component.html',
  styleUrls: ['./details-account.component.css']
})
export class DetailsAccountComponent implements OnInit {
  @Input() modalState? : boolean ; 
  @Input() detailedAccount : AccountDto = new AccountDto(); 
  @Output() detailedModalCloseEvent=new EventEmitter<boolean>(); 
  constructor() { }

  ngOnInit(): void {
    console.log( "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA" );
    console.log( this.detailedAccount );
  }
  onClickNo():void{  
    this.modalState = false;  
    this.detailedModalCloseEvent.emit(this.modalState); 
  }
}
