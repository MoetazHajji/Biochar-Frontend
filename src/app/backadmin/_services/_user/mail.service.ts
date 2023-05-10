import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Msg } from 'src/app/_models/_Mail/Msg';
import { TimeOff } from 'src/app/_models/_user/TimeOff';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MailService {
  url = `${environment.apiBaseUrl}`
  constructor(private http:HttpClient, private router: Router) { }
  add(msg:Msg) : Observable<HttpResponse<any>> {
    return this.http.post(`${this.url}/mail-service/mail/simple-mail`,msg , {observe : 'response' })
  }
  goToComponent(component:string) {this.router.navigateByUrl(component);} // eq de routerLink="child1"
}
