import { Component, OnInit } from '@angular/core';
import { Demand } from 'src/app/_models/_stock/demand';
import { Training } from 'src/app/_models/_stock/training';
import { TrainingService } from 'src/app/backadmin/_services/training.service';

@Component({
  selector: 'app-trainings',
  templateUrl: './trainings.component.html',
  styleUrls: ['./trainings.component.css']
})
export class TrainingsComponent implements OnInit {

  available_trainings! : Training[];
  showModal = false;
  internal_trainings!: Training[]
  external_trainings!: Training[]
  myImgUrl:string='assets/images/icon/no-image.png';
  

  constructor(private _service:TrainingService) { }

  ngOnInit(): void {
     this._service.getDispo().subscribe(
      data => this.available_trainings = data
     )

     this._service.getSuits().subscribe(
      data => {
        this.internal_trainings = data.internal
        this.external_trainings = data.external
      }
     )
  }

  toggleModal()
  {
    this.showModal = !this.showModal;
  }

  sendDemand(training : Training)
  {
    let demand = new Demand();
    demand.training = training.title;
    demand.description = "jack@example.com";
    this._service.sendDemand(demand).subscribe(
      () => training.id_training = 0
    );
  }
}
