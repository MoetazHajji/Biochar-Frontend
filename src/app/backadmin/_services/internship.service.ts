import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Test } from 'src/app/_models/_stock/Test';
import { Internship } from 'src/app/_models/_stock/internship';
import { Internshiprequest } from 'src/app/_models/_stock/internship_request';


@Injectable({
  providedIn: 'root'
})
export class InternshipService {

  constructor(private http:HttpClient) { }

  url = "http://localhost:9050/biochar/internship/InternshipRequest/";
  url2 = "http://localhost:9050/biochar/internship/Internship/";
  url3 = "http://localhost:9050/biochar/internship/Test/"

  

  public getAll(): Observable<Internshiprequest[]> {
    return this.http.get<Internshiprequest[]>(this.url + "all");
  }


  public delete(id : number) : Observable<any>
  {
    return this.http.delete(this.url + "delete/"+id)
  }

  public deleteinternship(id : number) : Observable<any>
  {
    return this.http.delete(this.url2 + "delete/"+id)
  }


  public add_internship(internship : Internship,id_request : number) : Observable<Internship>
  {
    return this.http.post<Internship>(this.url2+"add/"+id_request,internship);
  }

  public getAllInternships() : Observable<Internship[]>
  {
    return this.http.get<Internship[]>(this.url2+"all")
  }

  public addRequest(request : Internshiprequest,cv : File)
  {
    const formData = new FormData();
    const internshiprequestBlob = new Blob([JSON.stringify(request)], { type : 'application/json'})
    formData.append('cv',cv);
    formData.append('ir',internshiprequestBlob);
    return this.http.put<any>(this.url+"add_request",formData)
  }
  public addtest(test : Test)
  {
    return this.http.post<any>(this.url3+"addTest",test)
  }
  


}
