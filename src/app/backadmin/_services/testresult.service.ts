import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TestResult } from 'src/app/_models/testresult';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
/*const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  responseType: 'testresult' as 'json'
};*/
export class TestresultService {
  url = `${environment.apiBaseUrl}`

  constructor(private http:HttpClient) { }

  getAll() : Observable<HttpResponse<any>>{
    return this.http.get(`${this.url}/analysis/TestResult/all` , {observe : 'response'})
  }
  DeleteProduct(idTestResult:any){
    return this.http.delete(`${this.url}/analysis/TestResult/delete/${idTestResult}`, {observe : 'response'})
  }
  uploadImage(file: any,idTest:any) : Observable<any[]> {

    return this.http.post<any[]>('http://localhost:9060/biochar/analysis/extract-table/'+idTest, file);
  }
  
   /*affectCompToMiss(idM:any , idComp:any ) : Observable<HttpResponse<any>>{
    return this.http.put(`${this.url}/analysis/TestResult/asign/${idM}`, idComp,{observe : 'response'})
   }*/

  /* exportpdf(id:any) : Observable<HttpResponse<any>>{
    return this.http.get(`${this.url}/analysis/TestResult/exporttopdf/${id}` , {observe : 'response'})
  }*/
  uploadFile(file: File): Observable<any> {
    const formData = new FormData();
    
    // Check if the file is defined before appending it to the form data
    if (file) {
      formData.append('file', file, file.name);
    }
  
    return this.http.post(`${this.url}/upload`, formData);
  }
  exportpdf(id: any): Observable<Blob> {
    return this.http.get(`${this.url}/analysis/TestResult/exporttopdf/${id}`, {responseType: 'blob'
    });
  }
 
}
