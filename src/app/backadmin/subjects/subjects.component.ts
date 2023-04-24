import { Component, OnInit } from '@angular/core';
import { Subject } from 'src/app/_models/_product/subject';
import { TrainingService } from '../_services/training.service';

@Component({
  selector: 'app-subjects',
  templateUrl: './subjects.component.html',
  styleUrls: ['./subjects.component.css']
})
export class SubjectsComponent implements OnInit {
  selectedFile!: File;
  subjects! : Subject[];
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
}
