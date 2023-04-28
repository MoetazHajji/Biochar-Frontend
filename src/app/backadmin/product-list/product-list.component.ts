import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/_models/_stock/product';
import { ProductService } from '../_services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  @Input() getProductId : any
  addNewProductModal:boolean = false;
  editProductModal:boolean = false;
  refreshSideBarProduct: boolean = false;
  openDetailPodModal:boolean = false;

  prodId: any

  productList:Product[]=[];
  productDetailedList:Product[]=[];
  product : Product = new Product();

  productIdToDelete!:any

  constructor(private _productService : ProductService) { }

  ngOnInit(): void {
   this.getProductList();
  }

  getProductList(){
    this._productService.getAll().subscribe((res:any)=>{
      this.productList = res.body
    })
    console.log(this.productList)
  }

  DeleteProduct(id:any){
    this._productService.DeleteProduct(id).subscribe({
      next:()=>{
        this.productList=this.productList.filter((p)=> p.id!=id)
        this.refresh()
      }
    })
  }

  refresh(): void {
    window.location.reload();
  }

  getProductById(id:any){
    this._productService.getProductById(id).subscribe((res:any)=>{
      this.productList = res.body
    })
  }

  AddNewProduct(){
    this.addNewProductModal = !this.addNewProductModal;
  }

  closeModalNewProduct($event : any) : void{
    this.addNewProductModal = $event
  }

  actualiseProduct(){
    this.refreshSideBarProduct=true;
  }
  
  EditProduct(event: any){
    this.getProductId = event
    this.editProductModal = !this.editProductModal;
  }
  
  showDetails($event:any){
    this.prodId = $event;
    this.openDetailPodModal = !this.openDetailPodModal;
  }
}
