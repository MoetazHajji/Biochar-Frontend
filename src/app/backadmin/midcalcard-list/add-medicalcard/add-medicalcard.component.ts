import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { Medicalcard } from 'src/app/_models/medicalcard';
import { Typedossier } from 'src/app/_models/Typedossier';
import { MedicalcardService } from '../../_services/medicalcard.service';

@Component({
  selector: 'app-add-medicalcard',
  templateUrl: './add-medicalcard.component.html',
  styleUrls: ['./add-medicalcard.component.css']
})
export class AddMedicalcardComponent implements OnInit {
  @Input() modalNewProduct : boolean= true
  @Output() closeModalNewProduct=new EventEmitter<boolean>(); 
  @Output() refreshProduct=new EventEmitter<boolean>();

  medicalcard:Medicalcard = new Medicalcard();

  createProductForm : UntypedFormGroup =this.formBuilder.group({
    image:[''],
    description:['']
  })
  idMissionForm:any
  path: any = false;
  hideForm = false;
  submitted = false;
  competenceList: Medicalcard[]=[]
  idMiss : any
 id: number=2;
 Typedossies = Object.keys(Typedossier)
  
 // myValues: Sample[] = [];
  
 // selectedCompetence:Sample[]=[];
  constructor(private formBuilder : UntypedFormBuilder,private _medicalcardService: MedicalcardService ) { }

  ngOnInit(): void {
  }
  addProduct() {
    this._medicalcardService.addProduct(this.medicalcard,this.id).subscribe((res:any) => {
      error : (err:any) => console.log(err)
      this.refresh()
    }) 
  }
  refresh(): void {
    window.location.reload();
  }
  cancel(){
    this.submitted = false
    this.hideForm = true;
    this.modalNewProduct = false;
    this.createProductForm.reset();
    this.closeModalNewProduct.emit(this.modalNewProduct);
  }

}
