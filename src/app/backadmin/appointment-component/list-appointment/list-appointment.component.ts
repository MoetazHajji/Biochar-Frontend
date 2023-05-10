import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { appointmentCalender ,clear } from './myScript.js';
import { AccountDto } from 'src/app/_models/_user/AccountDto';
import { AccountService } from '../../_services/_user/account.service';
import { ActivatedRoute } from '@angular/router';
import { AppointmentService } from '../../_services/_user/appointment.service';
import { Appointment } from 'src/app/_models/_user/Appointment'; 
import { AuthenticationService } from '../../_services/_user/authentication.service';
import { AuthenticationStatus } from 'src/app/_models/_user/AuthenticationStatus';


/*import { CalendarOptions } from '@fullcalendar/core'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction'*/



@Component({
  selector: 'app-list-appointment',
  templateUrl: './list-appointment.component.html',
  styleUrls: ['./list-appointment.component.css']
})
export class ListAppointmentComponent implements OnInit {
 username!:any
  account : AccountDto = new AccountDto(); 
  modaladdAppointement :boolean = false ;  
  Listappointments : Appointment[] = [];
  stateApptMsgBoxAuth : boolean = false;









  constructor(public accountService : AccountService,  private route: ActivatedRoute , 
    private appointmentService :AppointmentService , public authenticationService : AuthenticationService ) {  
    
  }
  onClickaddAppointment( ) : void {this.modaladdAppointement = true; }
  addAppointmentModalCloseEvent( $event :any) : void { this.modaladdAppointement = $event ;}


  onClickAppointmentModalAddEvent( $event :any) : void { 
    console .log($event) ; 
    this.accountService. addAppointementToUsername(   this.account.userDto.username , $event).subscribe(
      (response) => { console.log( response.body) 
        this.authenticationService.Response =response.body;
        this.stateApptMsgBoxAuth = true; 
        this. getAllDataAppointement ();
      }
    ,(error) => { this.stateApptMsgBoxAuth = true;   this.authenticationService.Response = {     token: "", status : AuthenticationStatus.ERROR , message : "Error Server ! " } })
  }
  closeEventstateMsgBoxAuth($event:any):void{
    this.stateApptMsgBoxAuth = $event;
  }



  ngOnInit(): void { 
    this.username = this.route.snapshot.params['username'];
    console.log(this.username);
   this. getAllDataAppointement ();
  }


  getAllDataAppointement () : void {

    this.accountService.getByUsername(this.username).subscribe((res:any)=>{   this.account = res.body; console.log(this.account);  }) ;
    this.appointmentService.getAll().subscribe((res:any)=>{ 
        this.Listappointments = res.body; console.log(this.Listappointments); 
        console.log( this.appointmentService.convert(   this.Listappointments)); 
        clear();
        appointmentCalender(this.appointmentService.convert(   this.Listappointments));
       }) ;
  }
}



/* appointmentCalender([
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
    ]);*/