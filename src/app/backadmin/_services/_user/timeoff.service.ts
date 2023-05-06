import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { TimeOff } from 'src/app/_models/_user/TimeOff';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TimeoffService {
  url = `${environment.apiBaseUrl}`
  stateModalConfirm : boolean = false;
  selectTimeOff  : TimeOff = new TimeOff(); 

  constructor(private http:HttpClient, private router: Router) { }
  goToComponent(component:string) {this.router.navigateByUrl(component);} // eq de routerLink="child1"
  goToChildComponent(parentcomponent:string): void {     this.router.navigate([parentcomponent]);}
  ////http://localhost:8099/biochar/user-service/TimeOff
  
  getAll() : Observable<HttpResponse<any>>{
    return this.http.get(`${this.url}/user-service/timeoff` , {observe : 'response'})
  }
  add(timeoff:TimeOff) : Observable<HttpResponse<any>> {
    return this.http.post(`${this.url}/user-service/timeoff`,timeoff , {observe : 'response'
    ,  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    })
  }
  update(timeoff:TimeOff) : Observable<HttpResponse<any>>{
    return this.http.put(`${this.url}/user-service/timeoff`,timeoff , {observe : 'response'})
  }
  delete(id:any) : Observable<HttpResponse<any>>{
    return this.http.delete(`${this.url}/user-service/timeoff/${id}`, {observe : 'response'})
  }
  deleteAll() : Observable<HttpResponse<any>>{
    return this.http.delete(`${this.url}/user-service/timeoff/all`, {observe : 'response'})
  }
}
 