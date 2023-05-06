import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CommandLigne } from 'src/app/_models/_stock/commandLigne';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CommandLigneService {

  url = `${environment.apiBaseUrl}`
  constructor(private http:HttpClient) { }

  addCommandLigne(idProduct:any,cmdLigne:CommandLigne) : Observable<HttpResponse<any>> {
    return this.http.post(`${this.url}/stock-service/commandLigne/addLigneAndProduct/${idProduct}`,cmdLigne , {observe : 'response'})
  }

  getProductFromCmdl(id:any) : Observable<HttpResponse<any>>{
    return this.http.get(`${this.url}/stock-service/commandLigne/getProductOfCmdl/${id}` , {observe : 'response'})
  }

  getCmdlById(id:any) : Observable<HttpResponse<any>> {
    return this.http.get(`${this.url}/stock-service/commandLigne/getCommLigne/${id}` , {observe : 'response'});
  }
  
  getAll() : Observable<HttpResponse<any>>{
    return this.http.get(`${this.url}/stock-service/offer/getAllAdress` , {observe : 'response'})
  }
}
