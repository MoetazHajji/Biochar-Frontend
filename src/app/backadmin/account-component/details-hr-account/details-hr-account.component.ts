import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AccountDto } from 'src/app/_models/_user/AccountDto';
import { Shift } from 'src/app/_models/_user/Shift';
import { Team } from 'src/app/_models/_user/Team';
import { AccountService } from '../../_services/_user/account.service';

@Component({
  selector: 'app-details-hr-account',
  templateUrl: './details-hr-account.component.html',
  styleUrls: ['./details-hr-account.component.css']
})
export class DetailsHrAccountComponent implements OnInit {
  @Input() modalState? : boolean ; 
  @Input() detailedHRAccount : AccountDto = new AccountDto(); 
  @Output() detailedHRModalCloseEvent=new EventEmitter<boolean>(); 
   constructor(public accountService : AccountService) { 
  }

  ngOnInit(): void { 
    console.log( this.detailedHRAccount );
  }
  onClickNo(){  
    this.modalState = false;  
    this.detailedHRModalCloseEvent.emit(this.modalState); 
  }
  onClickUpdating(){  
    console.log( "onClickUpdating" );
    this.accountService.update(this.detailedHRAccount ).subscribe((response) => { console.log("succuss Updating ! " ); console.log( response); }
    ,(error) => { console.log(error); }) ;
   // this.modalState = false;  
   // this.detailedHRModalCloseEvent.emit(this.modalState); 
  }

}
