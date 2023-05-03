import { Component, OnInit } from '@angular/core';
import { TrainingService } from '../_services/training.service';
import { Training } from 'src/app/_models/_stock/training';
import { Subject } from 'src/app/_models/_stock/subject';
import { Type_training } from 'src/app/_models/_stock/Type_training';


@Component({
  selector: 'app-training-admin',
  templateUrl: './training-admin.component.html',
  styleUrls: ['./training-admin.component.css']
})
export class TrainingAdminComponent implements OnInit {
  path : string = "assets/images/icon/holder.png";
  showModal = false;
  details : boolean = false;
  modalTitle!: string;
  nb_options:number =0;
  mytraining:Training = new Training();
  trainings! : Training[];
  selectedImage!: File;
  subjects! : Subject[];
  options = Object.keys(Type_training);
  constructor(private _service:TrainingService) { 

  }

  ngOnInit(): void {
    this._service.fetchAll().subscribe(
      data => this.trainings = data
    )
    this._service.getAllSubjects().subscribe(data => this.subjects = data);
    this.mytraining.type = Type_training.internal;
  }

  moreDetails()
  {
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
  }

  closeModal(): void {
    this.showModal = false;
  }

  onSave(): void {
    // Add your save logic here
    this.closeModal();
  }

  add()
  {
    if(this.selectedImage != undefined && this.selectedImage !=null)
    this.add_with_image()
    else
    this.add_without_image()
  }

  private add_with_image()
  {
    console.log(this.mytraining);
    const uploadImageData = new FormData();
    uploadImageData.append('image', this.selectedImage, this.selectedImage.name);
    this._service.add_with_image(this.mytraining,uploadImageData).subscribe(
      data => this.trainings = this.trainings.concat(data)
    );
 
  }

  private add_without_image(){

    this._service.add(this.mytraining).subscribe(
      data => this.trainings = this.trainings.concat(data)
    );

  }

}
