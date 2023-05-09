import { Component, OnInit } from '@angular/core';
import { TrainingService } from '../_services/training.service';

import { query } from '@angular/animations';
import { Training } from 'src/app/_models/_stock/training';


@Component({
  selector: 'app-trainings-list',
  templateUrl: './trainings-list.component.html',
  styleUrls: ['./trainings-list.component.css']
})
export class TrainingsListComponent implements OnInit {

  trainings! : Training[];
  searchQuery!: string;
  showModal = false;
  displayed_training! : Training;
  priv = true;
  deleteconfirmeModal = false;
  deleteAllModal = false;
  timeRemaining: number = 0;
  timerRunning: boolean = false;
  myImgUrl:string='assets/images/icon/no-image.png';
  currentPage = 1;
  constructor(private _service:TrainingService) { }

  ngOnInit(): void {
    this.getAll()
  }

  getAll()
  {
    this._service.fetchAll().subscribe(
      data => this.trainings = data
    )

  }
  public searchByTitle(): void {
    // Filter the trainings array by title
    if(this.searchQuery == "")
    {
      this.getAll();
    }

    this.trainings = this.trainings.filter(training => {
      return training.title.toLowerCase().includes(this.searchQuery.toLowerCase());
    });
  }


  openModal(training : Training): void {
    this.displayed_training = training;
    this.showModal = true;
  }

  closeModal(): void {
    this.showModal = false;
  }

  SortBy(by : string)
  {
     this._service.sort_by(by).subscribe(data => this.trainings = data)
  }

  displayDeleteModal()
  {
    this.closeModal();
    this.deleteconfirmeModal = true;
  }

  closeDeleteModal()
  {
    this.deleteconfirmeModal = false;
  }
  deletetraining()
  {
    this._service.deleteTraining(this.displayed_training.id_training).subscribe(  
      data => this.trainings=this.trainings.filter((t) => t.id_training != this.displayed_training.id_training)
    );


    this.deleteconfirmeModal = false;
  }

  displayDeleteAllModal()
  {
    this.deleteAllModal = true;
this.startTimer();

  }

  closeDeleteAllModal()
  {
    this.deleteAllModal = false;
  }

  deleteAll()
  {
    this._service.deleteAll().subscribe(
      data => this.trainings = []
    )
    this.closeDeleteAllModal()
  }

  startTimer(): void {
    this.timerRunning = true;
    this.timeRemaining = 5;
    const timer = setInterval(() => {
      this.timeRemaining--;
      if (this.timeRemaining === 0) {
        clearInterval(timer);
        this.timerRunning = false;
      }
    }, 1000);
  }
}
