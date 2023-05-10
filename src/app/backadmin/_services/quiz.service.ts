import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Quiz } from 'src/app/_models/_stock/quiz';


@Injectable({
  providedIn: 'root'
})
export class QuizService {
  url = "http://localhost:9022/biochar/training/quiz";
  constructor(private http:HttpClient)  { }

  public add(quizzes: Quiz[]): number[] {

    let _quizzes : number[] = [];
    quizzes.forEach(element => {
      this.http.post<Quiz>(this.url,element).subscribe(
       data =>  _quizzes.push(data.id_quiz)
      );
    });
    return _quizzes;
  }

  public getQuizByQuestion(question : string): Observable<Quiz>
   {
    return this.http.get<Quiz>(this.url+"/byQuestion/"+question);
  }

}
