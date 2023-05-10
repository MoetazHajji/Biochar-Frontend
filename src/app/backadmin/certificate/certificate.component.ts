import { Component, OnInit } from '@angular/core';

import { TrainingService } from '../_services/training.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Certificate } from 'src/app/_models/_stock/certificate';

@Component({
  selector: 'app-certificate',
  templateUrl: './certificate.component.html',
  styleUrls: ['./certificate.component.css']
})
export class CertificateComponent implements OnInit {
  certificate : Certificate = new Certificate();
  title! : string;
  
  currentDate = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit'
  }).replace(/\//g, '-');
  
  constructor(private params: ActivatedRoute,
              private _service : TrainingService,
              private router: Router) { }

  ngOnInit(): void {
    this.title = this.params.snapshot.params['title'];
    this._service.getAllCertificate().subscribe(
      data =>{ let foundObj =  data.find(object => object.training == this.title)!
        if(foundObj != null || foundObj != undefined)
        this.certificate = foundObj
      }
    )

    this.certificate.color = "#fff";
  }

  add_certificate()
  {
     
    this.certificate.training = this.title;
    this._service.addCertificate(this.certificate).subscribe(
      data => this.router.navigateByUrl('/admin/training')
    )
  }

}
