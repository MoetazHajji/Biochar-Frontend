import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { Sample } from 'src/app/_models/sample';
import { Test } from 'src/app/_models/test';
import { SampleService } from '../../_services/sample.service';
import { TestService } from '../../_services/test.service';

@Component({
  selector: 'app-add-testt',
  templateUrl: './add-testt.component.html',
  styleUrls: ['./add-testt.component.css']
})
export class AddTesttComponent implements OnInit {


  @Input() modalNewProduct : boolean= true
  @Output() closeModalNewProduct=new EventEmitter<boolean>(); 
  @Output() refreshProduct=new EventEmitter<boolean>();

  test:Test = new Test();

  createProductForm : UntypedFormGroup =this.formBuilder.group({
    image:[''],
    description:['']
  })
  idMissionForm:any
  path: any = false;
  hideForm = false;
  submitted = false;
  competenceList: Sample[]=[]
  idMiss : any
 //id: number=3;
  idSample:any;
  myValues: Sample[] = [];
  selectedBook:any;
  
  selectedCompetence:Sample[]=[];
  constructor(private formBuilder : UntypedFormBuilder,private _testService:TestService,private _sampleService: SampleService ) { }

  ngOnInit(): void {
   this._sampleService.getAll().subscribe((res:any)=>{
     
   this.competenceList = res.body
    
  })

  }

  addProduct() {
    this._testService.addProduct(this.test,this.selectedBook).subscribe((res:any) => {
      error : (err:any) => console.log(err)
      this.refresh()
    }) 
  }

  refresh(): void {
    window.location.reload();
  }
  check(value:any){
    this.selectedBook=value.target.value
  console.log(value.target.value.idSample)
  }
 
 /* selectCompetence(sample: any) {      
    this.selectedCompetence.push(sample.id);
    this.myValues =this.selectedCompetence
}

/*affectCompetenceToMission(){
  this._testService.affectCompToMiss(this.idMissionForm,this.myValues).subscribe((data:any)=>{
    console.log(data)
  })
}*/

  cancel(){
    this.submitted = false
    this.hideForm = true;
    this.modalNewProduct = false;
    this.createProductForm.reset();
    this.closeModalNewProduct.emit(this.modalNewProduct);
  }

}
