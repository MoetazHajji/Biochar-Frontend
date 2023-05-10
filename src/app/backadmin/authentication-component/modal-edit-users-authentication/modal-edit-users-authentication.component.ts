import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AccountDto } from 'src/app/_models/_user/AccountDto';
import { AccountService } from '../../_services/_user/account.service';

@Component({
  selector: 'app-modal-edit-users-authentication',
  templateUrl: './modal-edit-users-authentication.component.html',
  styleUrls: ['./modal-edit-users-authentication.component.css']
})
export class ModalEditUsersAuthenticationComponent implements OnInit {
  @Input() modalState? : boolean ; 
  @Input() EditUsersAccount : AccountDto = new AccountDto(); 
  @Output() EditUsersModalCloseEvent=new EventEmitter<boolean>(); 
  @Output() EditUsersModalUpdateEvent=new EventEmitter<AccountDto>();  
  
  isEnable : boolean = false;
  constructor(public accountService:AccountService) { }

  ngOnInit(): void {   
    this.isEnable = this.EditUsersAccount.userDto.enabled ; 
  } 
  onClickNo(){  
    this.modalState = false;  
    this.EditUsersModalCloseEvent.emit(this.modalState); 
  }
  onClickUpdating(){  
    console.log( "onClickUpdating" ); 
     this.modalState = false;  
     this.EditUsersModalCloseEvent.emit(this.modalState); 
     this.EditUsersModalUpdateEvent.emit(this.EditUsersAccount); 
  }
  onCheckRadioEnabledOption():void { 
    console.log(this.isEnable  )
    this.isEnable = ! this.isEnable;
    console.log(this.isEnable  )
    this.EditUsersAccount.userDto.enabled = this.isEnable ;
  }
}
