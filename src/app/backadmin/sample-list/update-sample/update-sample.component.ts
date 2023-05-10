import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { Sample } from 'src/app/_models/sample';
import { SampleService } from '../../_services/sample.service';

@Component({
  selector: 'app-update-sample',
  templateUrl: './update-sample.component.html',
  styleUrls: ['./update-sample.component.css']
})
export class UpdateSampleComponent implements OnInit {

  @Input() modalEditProduct:boolean=true ;
  @Input() ProductId : any
  @Output() closeModalEditProduct=new EventEmitter<boolean>(); 
  @Output() refreshProduct=new EventEmitter<boolean>();
  sample:Sample = new Sample();
  path: any = false;
  hideForm = false;
  submitted = false;
  editProductForm : UntypedFormGroup =this.formBuilder.group({
    image:[''],
    description:['']
  })
  
  constructor(private formBuilder : UntypedFormBuilder ,private _sampleService:SampleService) { }
  
  ngOnInit(): void {
    this._sampleService.getProductById(this.ProductId).subscribe((res:any)=>{
      this.sample=res.body
    })
  }
  EditProduct(){
    this._sampleService.EditProduct(this.sample).subscribe((res:any)=>{
      this.refresh()
      console.log(this.sample)
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












