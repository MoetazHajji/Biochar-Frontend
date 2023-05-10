import { Component, OnInit } from '@angular/core';
import { TrainingService } from '../_services/training.service';

import { ActivatedRoute, Router } from '@angular/router';

import { ProfilesTrainingService } from 'src/app/backadmin/_services/profiles-training.service';

import { Training } from 'src/app/_models/_stock/training';
import { Subject } from 'src/app/_models/_stock/subject';
import { Quiz } from 'src/app/_models/_stock/quiz';
import { Type_T } from 'src/app/_models/_stock/Type_training';
import { Type_Q } from 'src/app/_models/_stock/type_quiz';
import { Profile } from 'src/app/_models/_stock/profile';
import { Trainer } from 'src/app/_models/_stock/trainer';
import { Account } from 'src/app/_models/_user/Account';

@Component({
  selector: 'app-training-admin',
  templateUrl: './training-admin.component.html',
  styleUrls: ['./training-admin.component.css'],
})
export class TrainingAdminComponent implements OnInit {
  path: string = 'assets/images/icon/holder.png';
  showModal = false;
  confirmedModal = false;
  details: boolean = false;
  errors: boolean[] = [];
  modalTitle!: string;
  nb_options: number = 0;
  update_or_add = false;
  mytraining: Training = new Training();
  selectedImage!: File;
  subjects!: Subject[];
  quizzes: Quiz[] = [];
  options = Object.keys(Type_T);
  options_q = Object.keys(Type_Q);
  selected_profile: number = 0;
  selected_name = "";
  profiles!: Profile[];
  selected_account!: Account;

  suggestions! :any
  keys! : string[];
  constructor(
    private _service: TrainingService,
    private params: ActivatedRoute,
    private _service2: ProfilesTrainingService
  ) { }

  ngOnInit(): void {
    this.startUp();
  }

  case_update() {
    const title = this.params.snapshot.params['title'];
    if (title) {
      this._service.getTrainingByTitle(title).subscribe(
        data => {
           console.log(data)
          this.getData(data)
        }
      );

      this.path = "http://localhost:9022/biochar/training/images/" + this.mytraining.title + ".png"

      this.update_or_add = true;

    }
  }

  

  getData(data : Training) {

    if (data.quizes!.length > 0) {
      this._service.getQuizByQuestion(data.quizes!).subscribe(
        data => this.quizzes = data
      )
    }
    if (data.trainer != null && data.trainer != undefined && data.trainer != "") {



      let foundAccount!: Account;
      this._service2.getAccountByMail(data.trainer).subscribe(
        data => foundAccount = data
      );

      let profile;
      this._service2.getProfileByAccount(foundAccount.id).subscribe(
        data => profile = data
      )

      this.selected_name = foundAccount.firstname + " " + foundAccount.lastname;


    }
    this.mytraining = data;
  }
  startUp() {

    this.case_update();


    this._service.getAllSubjects().subscribe((data) => (this.subjects = data));
    if (this.update_or_add)
      this.mytraining.type = Type_T.internal;
    this._service2.getProfiles().subscribe(
      data => this.profiles = data
    )
  }
  moreDetails() {
    this.details = !this.details;
  }

  onImageSelected(event: any) {
    const file = (event.target as HTMLInputElement).files?.[0];
    this.path = file ? URL.createObjectURL(file) : '';
    this.selectedImage = event.target.files[0];
  }

  openModal(title: string): void {
    this.modalTitle = title;
    this.showModal = true;
    if(title == "Most wanted trainings")
    {
      this._service.getSuggestions().subscribe(
        data => {this.suggestions =data;
        
        this.keys = Object.keys(data);
      }
      
      )
    }
  }

  selectedSugg(key : string)
  {
  this.mytraining.title = key;
  this.showModal = false;
  }


  closeModal(): void {
    this.showModal = false;
  }

  onSave(): void {
    this.closeModal();
  }

  add() {

    if (this.quizzes.length == 0) {
      if (this.selectedImage != undefined && this.selectedImage != null)
        this._service
          .add_with_image(this.mytraining, this.selectedImage)
          .subscribe((data) => {
            this.add_and_affect_trainer();
            this.confirmedModal = true;
          });
      else
        this._service.add(this.mytraining).subscribe((data) => {
          this.add_and_affect_trainer();
          this.confirmedModal = true;
        });
    } else {
      if (this.selectedImage != undefined && this.selectedImage != null) {
        console.log(this.quizzes)
        this._service
          .add_with_quizzes(this.mytraining, this.quizzes, this.selectedImage)
          .subscribe((data) => {
            this.add_and_affect_trainer();
            this.confirmedModal = true;
            
          });
      } else {
        this._service
          .add_with_quizzes(this.mytraining, this.quizzes, null)
          .subscribe((data) => {
            this.add_and_affect_trainer();
            this.confirmedModal = true;
          });
      }
    }

  }



  add_quiz() {
    let q: Quiz = new Quiz();
    q.type = Type_Q.QCM;
    this.quizzes.push(q);
  }

  remove_quiz() {
    this.quizzes.pop();
  }

  validation() {
    if (this.mytraining.start_date > this.mytraining.end_date)
      this.errors[0] = true;
    else this.errors[0] = false;
  }

  setLimit() {
    if (this.mytraining.duration != undefined) {
      if (this.mytraining.duration < 4) this.mytraining.duration = 4;
      else if (this.mytraining.duration > 60) this.mytraining.duration = 60;
    }
  }

  valid_check(quiz: Quiz, index: number) {
    if (quiz.valid.length != 0) {
      let count = 0;
      if (quiz.answer_1 != null || quiz.answer_1 != undefined) count++;
      if (quiz.answer_2 != null || quiz.answer_2 != undefined) count++;
      if (quiz.answer_3 != null || quiz.answer_3 != undefined) count++;
      if (quiz.answer_3 != null || quiz.answer_3 != undefined) count++;

      if (quiz.valid[index] > count) quiz.valid[index] = count;

      if (quiz.valid.length > 2) {
        quiz.valid.forEach((element, i) => {
          if (i !== index && element === quiz.valid[index]) {
            quiz.valid[index] = 0;
          }
        });
      }
    }
  }

  selectProfile(profile_id: number) {
    this.selected_profile = profile_id;
    this.get_selected_account();


  }


  add_and_affect_trainer() {
    if (this.selected_profile != 0) {

      let trainer = new Trainer();
      console.log(this.selected_account)
      trainer.email = this.selected_account.email;
      trainer.firstname = this.selected_account.firstname;
      trainer.lastname = this.selected_account.lastname;
      trainer.phone = this.selected_account.phone;
      let trainings: string[] = [this.mytraining.title];
      trainer.trainings = trainings;
      console.log(trainer)
      this._service.addTrainer(trainer).subscribe(
      )
    }
  }

  get_selected_account() {
    let profile = this.profiles.find(object => object.id == this.selected_profile);

    this._service2.getAccountById(profile!.account_id).subscribe(
      data => {
        this.selected_account = data;
        this.selected_name = this.selected_account.firstname + " " + this.selected_account.lastname
      }
    )

    if (this.selected_account == undefined) {
      this._service2.getAccountById(profile!.account_id).subscribe(
        data => {
          this.selected_account = data;
          this.selected_name = this.selected_account.firstname + " " + this.selected_account.lastname
        }
      )
    }

  }
}
