import { Component, OnInit } from '@angular/core';
import { InternshipService } from '../_services/internship.service';
import { Internship } from 'src/app/_models/_stock/internship';

@Component({
  selector: 'app-internship-list',
  templateUrl: './internship-list.component.html',
  styleUrls: ['./internship-list.component.css']
})
export class InternshipListComponent implements OnInit {

  internships!: Internship[];

  openModal = false;

  constructor(
    private internshipService: InternshipService
  ) { }

  ngOnInit(): void {
    this.getAllInternships();
  }

  getAllInternships() {
    this.internshipService.getAllInternships().subscribe((data: Internship[]) => {
      this.internships = data;
      console.log(data)
    })
  }
  openModalfun(id: number) {
    this.openModal = true;

  }
  delete(id: number) {
    this.internshipService.deleteinternship(id).subscribe(
      (data) => this.internships = this.internships.filter((i) => i.id != id)
    )
  }


}
