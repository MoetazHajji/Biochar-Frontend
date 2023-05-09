import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Command } from 'src/app/_models/_stock/command';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CommandService {

  url = `${environment.apiBaseUrl}`
  constructor(private http:HttpClient) { }

  addCommand(cmdLignes:number[],command:Command) : Observable<HttpResponse<any>> {
    return this.http.post(`${this.url}/stock-service/command/AddCommandAndAssignToCommandLigne/${cmdLignes}`,command , {observe : 'response'})
  }

  getAll() : Observable<HttpResponse<any>>{
    return this.http.get(`${this.url}/stock-service/command/getAllCommands`, {observe : 'response'})
  }

  getProdsForCommand(idC:any): Observable<HttpResponse<any>>{
    return this.http.get(`${this.url}/stock-service/command/getProduForCommand/${idC}`, {observe : 'response'})
  }
}
