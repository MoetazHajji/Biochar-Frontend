import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Internshiprequest } from 'src/app/_models/_stock/internship_request';
import { InternshipService } from 'src/app/backadmin/_services/internship.service';

@Component({
  selector: 'app-add-request',
  templateUrl: './add-request.component.html',
  styleUrls: ['./add-request.component.css']
})
export class AddRequestComponent implements OnInit {

  internshipRequest = new Internshiprequest();
  cv! : File;


  constructor(private service: InternshipService,private router:Router) { }

  ngOnInit(): void {
    this.internshipRequest = new Internshiprequest();
  }

  initialize() {
    this.ngOnInit();
  }


  onFileSelect(event : any){
   this.cv = event.target.files[0];
  }
  add() {
    this.service.addRequest(this.internshipRequest,this.cv).subscribe((data: Internshiprequest) => {
      this.router.navigateByUrl('/admin/internship/request')
    })
  
  }

}
