import { Component, OnInit } from '@angular/core';
import { Quiz } from 'src/app/_models/_stock/quiz';
import { Training } from 'src/app/_models/_stock/training';
import { TrainingService } from 'src/app/backadmin/_services/training.service';

@Component({
  selector: 'app-my-training',
  templateUrl: './my-training.component.html',
  styleUrls: ['./my-training.component.css']
})
export class MyTrainingComponent implements OnInit {
  my_trainings! : Training[]
  quizzes : Quiz[][] = []
  answers : number[][] = [[],[],[]]
  result  ="";
  score = "";
  constructor(private _service:TrainingService) { }

  ngOnInit(): void {

   this._service.getScore().subscribe(
    data => this.score = data.toString()
   )
      this._service.getTrainingsByTrainee("jack@example.com").subscribe(
        data => {this.my_trainings = data;
        for(let i =0;i<data.length;i++)
      {
        this._service.getQuizByQuestion(data[i].quizes!).subscribe(
          data2 => this.quizzes[i] = data2
        )
      }}
      )


  }


  submit(training : Training)
  {
    const myMap = new Map<string, number[]>();
    for(let i =0;i<training.quizes!.length;i++)
    {
      myMap.set(training.quizes![i],this.answers[i])
    }
  /*  this._service.submit(myMap).subscribe(
      data => this.result = data.toString()
    )*/
    console.log(myMap)
  }
}
