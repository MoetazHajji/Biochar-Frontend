import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Subject } from 'src/app/_models/_product/subject';
import { Training } from 'src/app/_models/_product/training';

@Injectable({
  providedIn: 'root'
})
export class TrainingService {
  url = "http://localhost:9022/biochar/training";
  constructor(private http:HttpClient) { }

  public fetchAll(): Observable<Training[]> {
      return this.http.get<Training[]>(this.url + "/training");
    }

    public add(training: Training): Observable<Training> {

      return this.http.post<Training>(this.url + "/training",training);
    }


    public uploadSubjects(file : any) : Observable<Subject[]>
    {
      return this.http.post<Subject[]>(this.url + "/subjects/add_subjects",file);
    } 

    public getAllSubjects() : Observable<Subject[]>
    {
      return this.http.get<Subject[]>(this.url + "/subjects/getAll");
    } 

    public add_with_image(training: Training,image : any): Observable<Training> {
          const formData: FormData = new FormData();
          formData.append('t',  JSON.stringify(training));
          formData.append('image', image);
          return this.http.put<Training>(this.url + "/training/imaged",formData);
        }
    
}
