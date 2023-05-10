import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { Sample } from 'src/app/_models/sample';
import { SampleService } from '../../_services/sample.service';

@Component({
  selector: 'app-add-sample',
  templateUrl: './add-sample.component.html',
  styleUrls: ['./add-sample.component.css']
})
export class AddSampleComponent implements OnInit {

  @Input() modalNewProduct : boolean= true
  @Output() closeModalNewProduct=new EventEmitter<boolean>(); 
  @Output() refreshProduct=new EventEmitter<boolean>();

  sample:Sample = new Sample();

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
 id: number=3;
  
 // myValues: Sample[] = [];
  
 // selectedCompetence:Sample[]=[];
  constructor(private formBuilder : UntypedFormBuilder,private _sampleService: SampleService ) { }

  ngOnInit(): void {
   /* this._sampleService.getAll().subscribe((res:any)=>{
      this.competenceList = res.body
    })*////
  }

  addProduct() {
    this._sampleService.addProduct(this.sample,this.id).subscribe((res:any) => {
      error : (err:any) => console.log(err)
      this.refresh()
    }) 
  }

  refresh(): void {
    window.location.reload();
  }
 
  /*selectCompetence(sample: any) {      
    this.selectedCompetence.push(sample.id);
    this.myValues =this.selectedCompetence
}*/

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
