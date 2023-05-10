import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { Medicalcard } from 'src/app/_models/medicalcard';
import { Typedossier } from 'src/app/_models/Typedossier';
import { MedicalcardService } from '../../_services/medicalcard.service';

@Component({
  selector: 'app-update-medicalcard',
  templateUrl: './update-medicalcard.component.html',
  styleUrls: ['./update-medicalcard.component.css']
})
export class UpdateMedicalcardComponent implements OnInit {

  @Input() modalEditProduct:boolean=true ;
  @Input() ProductId : any
  @Output() closeModalEditProduct=new EventEmitter<boolean>(); 
  @Output() refreshProduct=new EventEmitter<boolean>();
  medicalcard:Medicalcard = new Medicalcard();
  Typedossies = Object.keys(Typedossier)
  path: any = false;
  hideForm = false;
  submitted = false;
  editProductForm : UntypedFormGroup =this.formBuilder.group({
    image:[''],
    description:['']
  })
  
  constructor(private formBuilder : UntypedFormBuilder ,private _medicalcardService:MedicalcardService) { }
  
  ngOnInit(): void {
    this._medicalcardService.getProductId(this.ProductId).subscribe((res:any)=>{
      this.medicalcard=res.body
    })
  }
  EditProduct(){
    this._medicalcardService.EditProduct(this.medicalcard).subscribe((res:any)=>{
      this.refresh()
      console.log(this.medicalcard)
    })
  }
  
  refresh(): void {
    window.location.reload();
  }
  cancel(){
    this.submitted = false
    this.hideForm = true;
    this.modalEditProduct = false;
    this.editProductForm.reset();
    this.closeModalEditProduct.emit(this.modalEditProduct);
  }
}
