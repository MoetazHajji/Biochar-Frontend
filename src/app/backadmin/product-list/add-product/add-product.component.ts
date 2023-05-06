import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { UntypedFormArray, UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { PrimeNGConfig } from 'primeng/api';
import { Product } from 'src/app/_models/_product/product';
import { ProductService } from '../../_services/product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  @Input() modalNewProduct : boolean= true
  @Output() closeModalNewProduct=new EventEmitter<boolean>(); 
  @Output() refreshProduct=new EventEmitter<boolean>();

  product:Product = new Product();

  createProductForm : UntypedFormGroup =this.formBuilder.group({
    image:[''],
    description:['']
  })
  path: any = false;
  hideForm = false;
  submitted = false;
  constructor(private formBuilder : UntypedFormBuilder,
    private _productService:ProductService ) { }

  ngOnInit(): void {
  }

  addProduct() {
    this._productService.addProduct(this.product).subscribe((res:any) => {
      error : (err:any) => console.log(err)
    })
  }


  cancel(){
    this.submitted = false
    this.hideForm = true;
    this.modalNewProduct = false;
    this.createProductForm.reset();
    this.closeModalNewProduct.emit(this.modalNewProduct);
  }

  

}
