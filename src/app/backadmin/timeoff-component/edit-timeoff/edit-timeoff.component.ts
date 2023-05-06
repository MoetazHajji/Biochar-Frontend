import { Component, OnInit } from '@angular/core';
import { TimeoffService } from '../../_services/_user/timeoff.service';
import { TimeOff } from 'src/app/_models/_user/TimeOff';

@Component({
  selector: 'app-edit-timeoff',
  templateUrl: './edit-timeoff.component.html',
  styleUrls: ['./edit-timeoff.component.css']
})
export class EditTimeoffComponent implements OnInit {
  editTimeoffModal:boolean = false;
  timeoff:TimeOff = new TimeOff();  
  constructor(public timeoffService : TimeoffService) { }

  ngOnInit(): void {
    this.timeoff =  this.timeoffService.selectTimeOff;
  }

  editTimeOff() {  
    this.editTimeoffModal = true;
  }
  cancel(){
   /* this.submitted = false
    this.hideForm = true;
    this.modalNewTimeOff = false; 
    this.closeModalNewTimeOff.emit(this.modalNewTimeOff);*/
  }
  back():void{
    this.timeoffService.goToComponent('/admin/timeoff');
  }
  confirmModalNoEventeditTimeoff($event : any) : void{ 
    this.editTimeoffModal = $event 
  }
  confirmModalYesEventeditTimeoff($event : any) : void{ 
    this.timeoffService.update(this.timeoff).subscribe((response) => {  this.editTimeoffModal = $event ;  }
    ,(error) => { console.log(error); }) ;
   
   
  }
}
