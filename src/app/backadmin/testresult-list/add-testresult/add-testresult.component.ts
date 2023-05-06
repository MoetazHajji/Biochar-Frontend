import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { Test } from 'src/app/_models/test';
import { TestResult } from 'src/app/_models/testresult';
import { TestService } from '../../_services/test.service';
import { TestresultService } from '../../_services/testresult.service';

@Component({
  selector: 'app-add-testresult',
  templateUrl: './add-testresult.component.html',
  styleUrls: ['./add-testresult.component.css']
})
export class AddTestresultComponent implements OnInit {
  @Input() modalNewProduct : boolean= true
  @Output() closeModalNewProduct=new EventEmitter<boolean>(); 
  @Output() refreshProduct=new EventEmitter<boolean>();
  createProductForm : UntypedFormGroup =this.formBuilder.group({
    image:[''],
    description:['']
  })


 

  onUpload() {
    console.log(this.selectedBook)
    const uploadImage = new FormData();
    console.log(uploadImage.append('image',this.selectedFile,this.selectedFile.name));
    this._testresultService.uploadImage(uploadImage,this.selectedBook)
      .subscribe(response => {
        error : (err:any) => console.log(err)
        this.refresh()
      }) 
    }
  
    refresh(): void {
      window.location.reload();
    }




  selectedBook:any;

  path: any = false;
  hideForm = false;
  submitted = false;
  selectedFile: any;
  results! : any[];
  idMissionForm:any

 
  mission : TestResult = new TestResult()
  competenceList: Test[]=[]
  idMiss : any
  
  myValues: Test[] = [];
  idm:number=2;
  selectedCompetence:Test[]=[];

  constructor(private formBuilder : UntypedFormBuilder,private _testresultService : TestresultService,private _testService : TestService) { }
  ngOnInit(): void {
    this._testService.getAll().subscribe((res:any)=>{
      this.competenceList = res.body})
  }

  onFileSelected(event:any) {
    this.selectedFile = event.target.files[0];
  }
  /*onUpload() {
    const uploadImage = new FormData();
    uploadImage.append('image',this.selectedFile,this.selectedFile.name);
    this._testresultService.uploadImage(uploadImage,this.idm).subscribe((res:any) => {
      this.idMissionForm=this.mission.idTestResult
      error : (err:any) => console.log(err)
    })
      console.log(this.mission)
  console.log(this.idMissionForm)
    
  }*/
  selectCompetence(competence: any) {      
    this.selectedCompetence.push(competence.id);
    this.myValues =this.selectedCompetence
}
check(value:any){
  this.selectedBook=value.target.value
console.log(value.target.value.idTest)
}

  cancel(){
    this.submitted = false
    this.hideForm = true;
    this.modalNewProduct = false;
    this.createProductForm.reset();
    this.closeModalNewProduct.emit(this.modalNewProduct);
  }




}
