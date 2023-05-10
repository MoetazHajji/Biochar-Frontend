import { Component, OnInit } from '@angular/core';
import { InternshipService } from '../_services/internship.service';
import { Option } from 'src/app/_models/_stock/option';
import { Question } from 'src/app/_models/_stock/question';
import { Test } from 'src/app/_models/_stock/Test';

@Component({
  selector: 'app-addtest',
  templateUrl: './addtest.component.html',
  styleUrls: ['./addtest.component.css']
})
export class AddtestComponent implements OnInit {
  test = new Test();
  Option = new Option;

  questions!: Question[];
  number_q!: number;

  constructor(private service: InternshipService) { }

  ngOnInit(): void {
    this.test = new Test();
  }

  questionsManage(event: any) {
    this.number_q = event.target.value
    let qs: Question[] = [];
    for (let i = 0; i < this.number_q; i++) {
      let q = new Question();
      let options: Option[] = [];
      let option1 = new Option();
      let option2 = new Option();
      let option3 = new Option();
      options.push(option1)
      options.push(option2)
      options.push(option3)
      q.options = options;
      qs.push(q);
    }
    this.questions = qs;
  }

  addTest() {
    this.test.questions = this.questions;
    this.test.date = new Date();
    this.service.addtest(this.test).subscribe(
      data => console.log(data)
    )
  }

  onChangeRadio(index: number, question: Question) {
    question.options.forEach(element => {
      element.correct = false;
    });
    question.options[index].correct = true;
  }
}
