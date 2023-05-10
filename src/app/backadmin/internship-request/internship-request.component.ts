import { Component, OnInit } from '@angular/core';
import { Detail } from 'src/app/_models/_stock/detail';
import { Diploma } from 'src/app/_models/_stock/dipoloma';
import { Internship } from 'src/app/_models/_stock/internship';
import { Internshiprequest } from 'src/app/_models/_stock/internship_request';
import { State } from 'src/app/_models/_stock/state2';
import { Subject } from 'src/app/_models/_stock/subject2';
import { InternshipService } from '../_services/internship.service';

@Component({
  selector: 'app-internship-request',
  templateUrl: './internship-request.component.html',
  styleUrls: ['./internship-request.component.css']
})
export class InternshipRequestComponent implements OnInit {

  openModal = false;
  selected_id!: number;
  options = Object.keys(State);
  options2 = Object.keys(Diploma);
  added = false;
  internship = new Internship();
  details = new Detail();
  selectedSubject: string = '';
  internship_requests!: Internshiprequest[];
  selectedNom?: string;
  selectedPrenom?: string;

  constructor(private service: InternshipService) { }



  ngOnInit(): void {
    this.getAll();
  }


  getAll() {

    this.service.getAll().subscribe(
      (data) => {
        this.internship_requests = data;
      }
    );

  }
  openModalfun(i: Internshiprequest) {
    this.openModal = true;
    this.selected_id = i.id;
    this.selectedNom = i.nom;
    this.selectedPrenom = i.prenom;
  }

  add() {

    let subject = new Subject()
    subject.name_subject = this.selectedSubject
    this.internship.subject = subject;
    this.internship.detail = this.details;
    this.internship.nom = this.selectedNom;
    this.internship.prenom = this.selectedPrenom;
    this.service.add_internship(this.internship, this.selected_id).subscribe(
      data => this.added = true
    )
  }

  close() {
    this.openModal = false;
    window.location.reload();
  }

  delete(id: number) {
    this.service.delete(id).subscribe(
      (data) => this.internship_requests = this.internship_requests.filter((i) => i.id != id)
    )
  }
}
