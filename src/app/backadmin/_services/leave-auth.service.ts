import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LeaveAuth } from 'src/app/_models/leaveAuth/leaveAuth';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LeaveAuthService {
  url = `${environment.apiBaseUrl}`
  constructor(private http: HttpClient) { }

  getAll(): Observable<HttpResponse<any>> {
    return this.http.get(`${this.url}/hr-service/LeaveAuth/getAllLA`, { observe: 'response' })
  }

  getLAById(id: any) {
    return this.http.get(`${this.url}/hr-service/LeaveAuth/getLAById/${id}`, { observe: 'response' })
  }

  AddLA(id: any, leaveAuth: LeaveAuth) {
    return this.http.post(`${this.url}/hr-service/LeaveAuth/addAndAssignLAToAccount/${id}`, leaveAuth, { observe: 'response' })
  }

  DeleteLA(id: any) {
    return this.http.delete(`${this.url}/hr-service/LeaveAuth/deleteLeaveAuth/${id}`, { observe: 'response' })
  }

  EditLA(id: any, leaveAuth: LeaveAuth) {
    return this.http.put(`${this.url}/hr-service/LeaveAuth/updateLeaveAuth/${id}`, leaveAuth, { observe: 'response' })
  }

  UpdateRemainigDays() {
    return this.http.post(`${this.url}/hr-service/LeaveAuth/updatingRemainingdays`, { observe: 'response' })
  }
}
