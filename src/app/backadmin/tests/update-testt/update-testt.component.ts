import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { Test } from 'src/app/_models/test';
import { TestService } from '../../_services/test.service';

@Component({
  selector: 'app-update-testt',
  templateUrl: './update-testt.component.html',
  styleUrls: ['./update-testt.component.css']
})
export class UpdateTesttComponent implements OnInit {

  @Input() modalEditProduct:boolean=true ;
  @Input() ProductId : any
  @Output() closeModalEditProduct=new EventEmitter<boolean>(); 
  @Output() refreshProduct=new EventEmitter<boolean>();
  test:Test = new Test();
  path: any = false;
  hideForm = false;
  submitted = false;
  editProductForm : UntypedFormGroup =this.formBuilder.group({
    image:[''],
    description:['']
  })

  constructor(private formBuilder : UntypedFormBuilder ,private _testService:TestService) { }

  ngOnInit(): void {
    this._testService.getProductById(this.ProductId).subscribe((res:any)=>{
      this.test=res.body
    })
  }
  EditProduct(){
    this._testService.EditProduct(this.test).subscribe((res:any)=>{
      console.log(this.test)
    })
  }
  cancel(){
    this.submitted = false
    this.hideForm = true;
    this.modalEditProduct = false;
    this.editProductForm.reset();
    this.closeModalEditProduct.emit(this.modalEditProduct);
  }
}
