import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CalendarDto } from 'src/app/_models/workSchedule/CalendarDto';
import { CalenderGroupWSDto } from 'src/app/_models/workSchedule/CalenderGroupWSDto';
import { CalenderWSDto } from 'src/app/_models/workSchedule/CalenderWSDto';
import { WorkSchedule } from 'src/app/_models/workSchedule/workSchedule';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WorkScheduleService {

  url = `${environment.apiBaseUrl}`
  constructor(private http: HttpClient) { }

  getAll(): Observable<HttpResponse<any>> {
    return this.http.get(`${this.url}/WorkSchedule/getAllWorkSchedule`, { observe: 'response' })
  }

  addWorkSchedule(startDate: any, endDate: any): Observable<HttpResponse<any>> {
    return this.http.post(`${this.url}/WorkSchedule/createDailyWorkSchedule/${startDate}/${endDate}`, null, { observe: 'response' })
  }

  addSundayWorkSchedule(sunday: any): Observable<HttpResponse<any>> {
    return this.http.post(`${this.url}/WorkSchedule/createWeekendWorkSchedule/${sunday}`, null, { observe: 'response' })
  }

  convert(workWSchedules: CalenderGroupWSDto[]): CalendarDto[] {
    const calendarEvents: CalendarDto[] = [];
    workWSchedules.forEach((workSchedule) => {
      const start = new Date(workSchedule.StartTime);
      const end = new Date(workSchedule.EndTime);
      calendarEvents.push({
        id: "0",
        title: workSchedule.Subject.join(" \n "),
        start: start,
        end: end,
        color: "#4CB847",
        editable: false
      });
    });
    return calendarEvents;

  }
}
