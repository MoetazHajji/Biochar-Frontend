import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Test } from 'src/app/_models/test';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  url = `${environment.apiBaseUrl}`
  constructor(private http:HttpClient) { }

  getAll() : Observable<HttpResponse<any>>{
    return this.http.get(`${this.url}/analysis/Test/all` , {observe : 'response'})
  }
  DeleteProduct(idTest:any){
    return this.http.delete(`${this.url}/analysis/Test/delete/${idTest}`, {observe : 'response'})
  }
  addProduct(test:Test,idSample:any) : Observable<HttpResponse<any>> {
    return this.http.post(`${this.url}/analysis/Test/AddAndAssignTestToSample/${idSample}` ,test , {observe : 'response'})
  }
  getProductById(idTest:any){
    return this.http.get(`${this.url}/analysis/Test/get/${idTest}`,{observe : 'response'})
  }
 /* affectCompToMiss(idM:any , idComp:any[] ) : Observable<HttpResponse<any>>{
    return this.http.put(`${this.url}/analysis/Test/${idM}`, idComp,{observe : 'response'})
   }*/
   EditProduct(test:Test){
    return this.http.put(`${this.url}/analysis/Test/update`, test , {observe : 'response'})
  }
}
