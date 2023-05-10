import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Shift } from 'src/app/_models/_user/Shift';
import { StateRegion } from 'src/app/_models/_user/StateRegion';
import { Team } from 'src/app/_models/_user/Team';
import { environment } from 'src/environments/environment';
import { Appointment } from 'src/app/_models/_user/Appointment';
import { CalendarDto } from 'src/app/_models/_user/CalendarDto';


@Injectable({
  providedIn: 'root'
})
export class AppointmentService {
  url = `${environment.apiBaseUrl}`
  selectAppointment: Appointment = new Appointment(); 

  constructor(private http:HttpClient, private router: Router,    private activeRoute: ActivatedRoute) { }
  goToComponent(component:string) {this.router.navigateByUrl(component);} // eq de routerLink="child1"
  getAll() : Observable<HttpResponse<any>>{
    return this.http.get(`${this.url}/user-service/appointment` , {observe : 'response'})
  }
  getById(id: any) : Observable<HttpResponse<any>>{
    return this.http.get(`${this.url}/user-service/appointment/${id}` , {observe : 'response'})
  }
  update(appointment:Appointment) : Observable<HttpResponse<any>>{
    return this.http.put(`${this.url}/user-service/appointment`,appointment , {observe : 'response'})
  }
  delete(id:any) : Observable<HttpResponse<any>>{
    return this.http.delete(`${this.url}/user-service/appointment/${id}`, {observe : 'response'})
  }


  convert(appointments:  Appointment[]):CalendarDto[]{
    const calendarEvents: CalendarDto[] = [];
    appointments.forEach((appointment) => { 
      const start = new Date(appointment.appointmentStart);  
      const end = new Date(appointment.appointmentEnd);  
      calendarEvents.push({
        id: appointment.id.toString(),
        title: appointment.firstName +" "+appointment.lastName,
        start: start,
        end: end,
        color: "#fc9919",
        editable:   false 
      });
    });
  
    return calendarEvents;

  }

 
}
