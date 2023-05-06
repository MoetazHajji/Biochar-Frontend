import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, UntypedFormArray, UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { PrimeNGConfig } from 'primeng/api';
import { TimeOff } from 'src/app/_models/_user/TimeOff';
import { TimeoffService } from '../../_services/_user/timeoff.service';
@Component({
  selector: 'app-add-timeoff',
  templateUrl: './add-timeoff.component.html',
  styleUrls: ['./add-timeoff.component.css']
})
export class AddTimeoffComponent implements OnInit { 
  modalconfirm_AddTimeOff : boolean= false;
  timeoff:TimeOff = new TimeOff();  
  constructor(public timeoffService : TimeoffService) { }

  ngOnInit(): void {

  }



  addTimeOff() {
    console.log(  "addTimeOff" ); 
    this.modalconfirm_AddTimeOff = true;
  } 

  
  back():void{
    this.timeoffService.goToComponent('/admin/timeoff');
  }
  confirmModalNoEventAddTimeoff($event : any) : void{ 
    this.modalconfirm_AddTimeOff = $event 
  }
  confirmModalYesEventAddTimeoff($event : any) : void{ 
    this.modalconfirm_AddTimeOff = $event 
    this.timeoffService.add(this.timeoff).subscribe((res:any) => { 
      error : (err:any) => {   console.log(err); }
    });
  }


 
 


 






  
}
