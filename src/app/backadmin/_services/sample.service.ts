import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Sample } from 'src/app/_models/sample';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SampleService {
  url = `${environment.apiBaseUrl}`
  constructor(private http:HttpClient) { }

  getAll() : Observable<HttpResponse<any>>{
    return this.http.get(`${this.url}/analysis/Sample/all` , {observe : 'response'})
  }
  DeleteProduct(idSample:any){
    return this.http.delete(`${this.url}/analysis/Sample/delete/${idSample}`, {observe : 'response'})
  }
  getById(id:any) : Observable<HttpResponse<any>>{
    return this.http.get(`${this.url}/analysis/Sample/get/${id}`, {observe : 'response'})
  }
  addProduct(sample:Sample,idacc:any) : Observable<HttpResponse<any>> {
    return this.http.post(`${this.url}/analysis/Sample/AddAndAssignSapleToAccount/${idacc}` ,sample , {observe : 'response'})
  }
 /* affectCompToMiss(idM:any , idComp:any[] ) : Observable<HttpResponse<any>>{
    return this.http.put(`${this.url}/analysis/Test/${idM}`, idComp,{observe : 'response'})
   }*/
   EditProduct(sample:Sample){
    return this.http.put(`${this.url}/analysis/Sample/update`, sample , {observe : 'response'})
  }
  getProductById(idSample:any){
    return this.http.get(`${this.url}/analysis/Sample/get/${idSample}`,{observe : 'response'})
  }
}
