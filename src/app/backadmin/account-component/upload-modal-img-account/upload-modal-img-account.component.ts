import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { AttachementDto } from 'src/app/_models/_user/AttachementDto';
import { environment } from 'src/environments/environment';
import { AuthenticationService } from '../../_services/_user/authentication.service';
import { AccountDto } from 'src/app/_models/_user/AccountDto';

@Component({
  selector: 'app-upload-modal-img-account',
  templateUrl: './upload-modal-img-account.component.html',
  styleUrls: ['./upload-modal-img-account.component.css']
})
 

export class UploadModalImgAccountComponent implements OnInit {
  @Input() modalState? : boolean ;
  @Input() idAccount? : any ;
  link? : string ; 
  url = `${environment.apiBaseUrl}`;
  attachementDto?  :AttachementDto;
  @Output() uploadImgAccountModalCloseEvent=new EventEmitter<boolean>(); 
  @Output() uploadImgAccountModal_OnUploadSuccessEvent=new EventEmitter<AttachementDto>(); 
  constructor(private http:HttpClient ) {
 
   }

  ngOnInit(): void {
    this.link = `${this.url}/user-service/attachment/upload-to-Account/${this.idAccount}`;
    console.log( this.link );
  }
  onClickNo():void{  
    this.modalState = false;  
    this.uploadImgAccountModalCloseEvent.emit(this.modalState); 
  }







 // Variable to store shortLink from api response
 shortLink: string = "";
 loading: boolean = false; // Flag variable
 file?: File ; // Variable to store file

  // On file Select
  onChange(event:any) {
    this.file = event.target.files[0];
}  // OnClick of button Upload
onUpload() {
    this.loading = !this.loading;
    //console.log(this.file);
    this.upload(this.file,this.link)
  //  .subscribe( (event: any) => {  if (typeof (event) === 'object') { 
              // Short link via api response
            //  this.shortLink = event.link; 
            //  this.loading = false; // Flag variable 
          //} } );
    .subscribe((response) => { 
      this.attachementDto = response; 
      this.uploadImgAccountModal_OnUploadSuccessEvent.emit(this.attachementDto); 
      this.modalState = false;  
      this.uploadImgAccountModalCloseEvent.emit(this.modalState); 





      console.log( this.attachementDto); }
      ,(error) => { console.log(error); })
}

upload(file:any,link:any):Observable<any> {
  // Create form data
  const formData = new FormData(); 
  // Store form name as "file" with file data
  formData.append("file", file, file.name);
  // Make http post request over api
  // with formData as req
  return this.http.put(link, formData);}

}
