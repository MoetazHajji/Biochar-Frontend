import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Appointment } from 'src/app/_models/_user/Appointment';
import { AppointmentService } from '../../_services/_user/appointment.service';



@Component({
  selector: 'app-add-appointment',
  templateUrl: './add-appointment.component.html',
  styleUrls: ['./add-appointment.component.css']
})
export class AddAppointmentComponent implements OnInit {
  @Input() modalState? : boolean ;  
  @Output() addAppointmentModalCloseEvent=new EventEmitter<boolean>(); 
  @Output() onClickAppointmentModalAddEvent  =new EventEmitter<Appointment>(); 
    appointment : Appointment = new Appointment;  
  constructor(public appointmentService : AppointmentService) { }

  ngOnInit(): void {this.appointment.firstVisit = this.stateRadioVisitOption;
   
  }
  onClickNo(){  
    this.modalState = false;  
    this.addAppointmentModalCloseEvent.emit(this.modalState); 
  }
  onClickAdd(){  
    console.log( "onClickUpdating" ); 
    this.modalState = false;  
     this.addAppointmentModalCloseEvent.emit(this.modalState); 
     this.onClickAppointmentModalAddEvent.emit(this.appointment); 
  }
  stateRadioVisitOption : boolean = false ; 
  onCheckRadioVisitOption(state : boolean ) : void {
    this.stateRadioVisitOption = state;this.appointment.firstVisit = state;
  }
 
}
