import { Component, OnInit } from '@angular/core';
import { TrainingService } from '../_services/training.service';
import { Training } from 'src/app/_models/_product/training';

@Component({
  selector: 'app-trainings-list',
  templateUrl: './trainings-list.component.html',
  styleUrls: ['./trainings-list.component.css']
})
export class TrainingsListComponent implements OnInit {

  trainings! : Training[];
  constructor(private _service:TrainingService) { }

  ngOnInit(): void {
      this._service.fetchAll().subscribe(
        data => this.trainings = data
      )
  }

}
