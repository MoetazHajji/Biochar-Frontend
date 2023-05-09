import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Medicalcard } from 'src/app/_models/medicalcard';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MedicalcardService {

  url = `${environment.apiBaseUrl}`
  constructor(private http:HttpClient) { }

  getAll() : Observable<HttpResponse<any>>{
    return this.http.get(`${this.url}/analysis/Medicalcard/all` , {observe : 'response'})
  }
  DeleteProduct(idMedicalcard:any){
    return this.http.delete(`${this.url}/analysis/Medicalcard/delete/${idMedicalcard}`, {observe : 'response'})
  }
  getProductId(idMedicalcard:any) : Observable<HttpResponse<any>>{
    return this.http.get(`${this.url}/analysis/Medicalcard/get/${idMedicalcard}`, {observe : 'response'})
  }
  addProduct(medicalcard:Medicalcard,idacc:any) : Observable<HttpResponse<any>> {
    return this.http.post(`${this.url}/analysis/Medicalcard/AddAndAssignmedicalToAccount/${idacc}` ,medicalcard , {observe : 'response'})
  }
  EditProduct(medicalcard:Medicalcard){
    return this.http.put(`${this.url}/analysis/Medicalcard/update`, medicalcard , {observe : 'response'})
  }

}
