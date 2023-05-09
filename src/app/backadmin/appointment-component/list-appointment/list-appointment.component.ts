import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { myFunction2 } from './myScript.js';
import { AccountDto } from 'src/app/_models/_user/AccountDto';
import { AccountService } from '../../_services/_user/account.service';
import { ActivatedRoute } from '@angular/router';
import { AppointmentService } from '../../_services/_user/appointment.service';
import { Appointment } from 'src/app/_models/_user/Appointment'; 


/*import { CalendarOptions } from '@fullcalendar/core'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction'*/



@Component({
  selector: 'app-list-appointment',
  templateUrl: './list-appointment.component.html',
  styleUrls: ['./list-appointment.component.css']
})
export class ListAppointmentComponent implements OnInit {
 idAnnoce!:any
  account : AccountDto = new AccountDto(); 
  modaladdAppointement :boolean = false ;  
  Listappointments : Appointment[] = [];




  /*calendarOptions:CalendarOptions =  {
    plugins : [
      dayGridPlugin,
      interactionPlugin,
    ],
    initialView: 'dayGridMonth'
   // ,dateClick: this.handleDateClick.bind(this)
  }*/
  






  constructor(public accountService : AccountService,  private route: ActivatedRoute , private appointmentService :AppointmentService) {  
    
  }
  onClickaddAppointment( ) : void {this.modaladdAppointement = true; }
  addAppointmentModalCloseEvent( $event :any) : void { this.modaladdAppointement = $event ;}
  onClickAppointmentModalAddEvent( $event :any) : void { }

  ngOnInit(): void { 
    this.idAnnoce = this.route.snapshot.params['id'];
    console.log(this.idAnnoce);
    this.accountService.getById(this.idAnnoce).subscribe((res:any)=>{   this.account = res.body; console.log(this.account);  }) ;
    this.appointmentService.getAll().subscribe((res:any)=>{   this.Listappointments = res.body; console.log(this.Listappointments);  }) ;
 


    const input = document.getElementById(
      'message',
    ) as HTMLInputElement | null;
    
    if (input != null) {
      console.log(input.value); // 👉️ "Initial Value"
    }
    
    myFunction2([
      {
        id:'144',
        title: 'All Day Event',
        start: '2019-08-01',
        color: "#fc9919",
        editable: true
      },
      {
        title: 'Long Event',
        start: '2019-08-07',
        end: '2019-08-10',
        backgroundColor : "#fc9919"

      },
      {
        groupId: '999',
        title: 'Repeating Event',
        start: '2019-08-09T16:00:00',
        textColor:"#fc9919"
      },
      {
        groupId: '999',
        title: 'Repeating Event',
        start: '2019-08-16T16:00:00'
      },
      {
        title: 'Conference',
        start: '2019-08-11',
        end: '2019-08-13'
      },
      {
        title: 'Meeting',
        start: '2019-08-12T10:30:00',
        end: '2019-08-12T12:30:00'
      },
      {
        title: 'Lunch',
        start: '2019-08-12T12:00:00'
      },
      {
        title: 'Meeting',
        start: '2019-08-12T14:30:00'
      },
      {
        title: 'Birthday Party',
        start: '2019-08-13T07:00:00'
      },
      {
        title: 'Click for Google',
        url: 'http://google.com/',
        start: '2019-08-28'
      }
    ]);
  }

}
