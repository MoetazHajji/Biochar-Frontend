import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { Sample } from 'src/app/_models/sample';
import { Test } from 'src/app/_models/test';
import { SampleService } from '../../_services/sample.service';
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
  selectedBook:any;
  editProductForm : UntypedFormGroup =this.formBuilder.group({
    image:[''],
    description:['']
  })
  competenceList: Sample[]=[]

  constructor(private formBuilder : UntypedFormBuilder ,private _testService:TestService,private _sampleService: SampleService) { }

  ngOnInit(): void {
    this._testService.getProductById(this.ProductId).subscribe((res:any)=>{
      this.test=res.body
    });
    this._sampleService.getAll().subscribe((res:any)=>{
     
      this.competenceList = res.body
       
     })
    
  }
  EditProduct(){
    this._testService.EditProduct(this.test).subscribe((res:any)=>{
      this.refresh()
      console.log(this.test)
    })
  }
  
  refresh(): void {
    window.location.reload();
  }
  check(value:any){
    this.selectedBook=value.target.value
  console.log(value.target.value.idSample)
  }
  cancel(){
    this.submitted = false
    this.hideForm = true;
    this.modalEditProduct = false;
    this.editProductForm.reset();
    this.closeModalEditProduct.emit(this.modalEditProduct);
  }
}
