import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { Product } from 'src/app/_models/_stock/product';
import { ProductService } from '../../_services/product.service';
import { Type_product } from 'src/app/_models/_stock/Type_product';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {

  @Input() modalEditProduct:boolean=true ;
  @Input() ProductId : any
  @Output() closeModalEditProduct=new EventEmitter<boolean>(); 
  @Output() refreshProduct=new EventEmitter<boolean>();

  product:Product = new Product();
  path: any = false;
  hideForm = false;
  submitted = false;
  productTypes = Object.keys(Type_product)
  editProductForm : UntypedFormGroup =this.formBuilder.group({
    image:[''],
    description:['']
  })
  constructor(private formBuilder : UntypedFormBuilder , private _productService:ProductService) { }

  ngOnInit(): void {
    this._productService.getProductById(this.ProductId).subscribe((res:any)=>{
      this.product=res.body
    })
  }

  EditProduct(){
    this._productService.EditProduct(this.product).subscribe((res:any)=>{
      this.refresh()
      console.log(this.product)
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
