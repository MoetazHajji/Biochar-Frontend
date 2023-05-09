import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Certificate } from 'src/app/_models/_stock/certificate';
import { Demand } from 'src/app/_models/_stock/demand';
import { Quiz } from 'src/app/_models/_stock/quiz';
import { Subject } from 'src/app/_models/_stock/subject';
import { Trainee } from 'src/app/_models/_stock/trainee';
import { Trainer } from 'src/app/_models/_stock/trainer';
import { Training } from 'src/app/_models/_stock/training';
import { Account } from 'src/app/_models/_user/Account';


@Injectable({
  providedIn: 'root'
})
export class TrainingService {
  url = "http://localhost:9022/biochar/training";
  id = 4;
  constructor(private http: HttpClient) { }

  public fetchAll(): Observable<Training[]> {
    return this.http.get<Training[]>(this.url + "/training");
  }

  public add(training: Training): Observable<Training> {

    return this.http.post<Training>(this.url + "/training", training);
  }


  public uploadSubjects(file: any): Observable<Subject[]> {
    return this.http.post<Subject[]>(this.url + "/subjects/add_subjects", file);
  }

  public uploadCookies(file: any): Observable<any> {
  
    return this.http.post<any>(this.url + "/subjects/add_cookies/"+5, file);
  }

  public getAllSubjects(): Observable<Subject[]> {
    return this.http.get<Subject[]>(this.url + "/subjects/getAll");
  }

  public add_with_image(training: Training, image: any): Observable<Training> {
    const formData: FormData = new FormData();
    const trainingBlob = new Blob([JSON.stringify(training)], { type: 'application/json' });

    formData.append('image', image);
    formData.append('t', trainingBlob)


    return this.http.put<Training>(this.url + "/training/imaged", formData);
  }

  add_with_quizzes(training: Training,quizes : Quiz[] ,image: any) : Observable<Training>{
    const formData: FormData = new FormData();
    const trainingBlob = new Blob([JSON.stringify(training)], { type: 'application/json' });
    const quizBlob = new Blob([JSON.stringify(quizes)], { type: 'application/json' });


    formData.append('image', image);
    formData.append('training', trainingBlob);
    formData.append('quizzes',quizBlob);


    return this.http.put<Training>(this.url + "/training/add_with_quizes", formData);
  }


  sort_by(value : string) : Observable<Training[]>
  {
    return this.http.get<Training[]>(this.url + "/training/sorted?by="+value);
  }

  deleteTraining(id_training : number)
  {
    return this.http.delete(this.url +"/training/"+id_training);
  }

  addTrainer(trainer : Trainer) : Observable<Trainer>
  {
    return this.http.post<Trainer>(this.url+"/trainer",trainer);
  }

  deleteAll() : Observable<any>
  {
   return this.http.delete<any>(this.url+"/training/all")
  }

  addCertificate(certificate : Certificate)
  {
    return this.http.post(this.url+"/certificate",certificate);
  }

  getAllCertificate() : Observable<Certificate[]>
  {
     return this.http.get<Certificate[]>(this.url + "/certificate");
  }

  getAllquizes() : Observable<Quiz[]>
  {
    return this.http.get<Quiz[]>(this.url +"/quiz")
  }

  getAlltrainers() : Observable<Trainer[]>
  {
    return this.http.get<Trainer[]>(this.url +"/trainer")
  }

  getTrainingByTitle(title: string) : Observable<Training>
  {
    return this.http.get<Training>(this.url +"/training/byTitle/"+title)
  }

  public getQuizByQuestion(questions : string[]): Observable<Quiz[]>
  {
   return this.http.post<Quiz[]>(this.url+"/quiz/byQuestion",questions);
 }

 public getSuggestions() : Observable<any>
 {
  return this.http.get<any>(this.url+"/subjects/getSuggesions");
 }

 public getDispo() : Observable<Training[]>
 {
  return this.http.get<Training[]>(this.url+"/training/get_dispo");
 }

 public sendDemand(demand : Demand) : Observable<any>
 {
  return this.http.post<any>(this.url+"/demand",demand);
 }

public getAllDemands() : Observable<Demand[]>
{
  return this.http.get<Demand[]>(this.url+"/demand")
}

public deleteDemand(id : number) : Observable<any>
{
  return this.http.delete<any>(this.url + "/demand/"+this.id);
}

public getAccountByMail(mail : string) : Observable<Account>
{
  return this.http.get<Account>(this.url+"/profile/byMail/"+mail);
}

public addTrainee(trainee : Trainee) : Observable<any>
{
  return this.http.post(this.url+"/trainee",trainee);
}


public getTrainingsByTrainee(email :string) : Observable<Training[]>
{
 return this.http.get<Training[]>(this.url+"/training/getByTrainee/"+email)
}

public submit(answers : Map<string, number[]>) : Observable<number>
{

   return this.http.put<number>(this.url+"/trainee/submit/"+this.id,answers)
}

public getScore() : Observable<number>
{

  return this.http.get<number>(this.url+"/trainee/get_score/"+this.id)
}

public getSuits() : Observable<any>
{

  return this.http.get(this.url+"/trainee/get_suits/"+this.id)
}
}
