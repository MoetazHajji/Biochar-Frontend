import { Component, OnInit } from '@angular/core';
import { Demand } from 'src/app/_models/_stock/demand';
import { TrainingService } from '../_services/training.service';
import { Trainee } from 'src/app/_models/_stock/trainee';

@Component({
  selector: 'app-demands',
  templateUrl: './demands.component.html',
  styleUrls: ['./demands.component.css']
})
export class DemandsComponent implements OnInit {
  demands!: Demand[];
  currentPage = 1;
  constructor(private _service: TrainingService) { }

  ngOnInit(): void {
    this._service.getAllDemands().subscribe(
      data => {
        this.demands = data;
      }
    )

  }

  accept(demand: Demand) {
    this._service.getAccountByMail(demand.description).subscribe(
      data => {
        let trainee: Trainee = new Trainee();
        trainee.email = data.email;
        trainee.firstname = data.firstname;
        trainee.lastname = data.lastname;
        trainee.training_title = demand.training;
        this._service.addTrainee(trainee).subscribe(
          () => {
            this._service.deleteDemand(demand.id_demand).subscribe(
              () => this.demands.filter(d => d.id_demand !== demand.id_demand)
            )
          }
        )
      }
    )
  }

  refuse(id: number) {

  }

}
