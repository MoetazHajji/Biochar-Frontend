import { Component, OnInit } from '@angular/core';

import { TrainingService } from '../_services/training.service';
import { Subject } from 'src/app/_models/_stock/subject';
import { Cookie } from 'src/app/_models/_stock/cookie';

@Component({
  selector: 'app-subjects',
  templateUrl: './subjects.component.html',
  styleUrls: ['./subjects.component.css']
})
export class SubjectsComponent implements OnInit {
  showModal = false;
  selectedFile!: File;
  textFile! : File;
  cookies! :Cookie[];
  subjects! : Subject[];
  cookies_added = false;
  constructor(private _service:TrainingService) { }

  ngOnInit(): void {
    this._service.getAllSubjects().subscribe(
      data => this.subjects = data);
  }

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
  }

  upload()
  {
      const uploadFileData = new FormData();
    uploadFileData.append('file', this.selectedFile, this.selectedFile.name);
    this._service.uploadSubjects(uploadFileData).subscribe(data => this.subjects = data);
  }

  openModal(): void {
    this.showModal = true;
  }

  closeModal(): void {
    this.showModal = false;
  }

  onTextSelected(event: any) {
    this.textFile = event.target.files[0];
  }

  uploadText()
  {
   
      const uploadFileData = new FormData();
    uploadFileData.append('file', this.selectedFile, this.selectedFile.name);
    this._service.uploadCookies(uploadFileData).subscribe(
      () => this.cookies_added = true
    );
  }
}
