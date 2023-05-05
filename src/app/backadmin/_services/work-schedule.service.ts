import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
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

}
