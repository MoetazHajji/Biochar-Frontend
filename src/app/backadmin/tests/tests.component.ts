import { Component, Input, OnInit } from '@angular/core';
import { Test } from 'src/app/_models/test';
import { TestService } from '../_services/test.service';

@Component({
  selector: 'app-tests',
  templateUrl: './tests.component.html',
  styleUrls: ['./tests.component.css']
})
export class TestsComponent implements OnInit {

  @Input() getProductId : any
  addNewProductModal:boolean = false;
  editProductModal:boolean = false;
  refreshSideBarProduct: boolean = false;
  openDetailPodModal:boolean = false;

  prodId: any


  productList:any;
  sample : Test = new Test();
  
  constructor(private _testService : TestService) { }

  ngOnInit(): void {
   this.getProductList();
  }

  getProductList(){
    this._testService.getAll().subscribe((res:any)=>{
      this.productList = res.body
    })
    console.log(this.productList)
  }
  DeleteProduct(idTest:any){
   let resp= this._testService.DeleteProduct(idTest);
    if (window.confirm('Are you sure you want to delete this Test?')) {
      resp.subscribe((data)=>this.productList=data);
          window.location.reload();}
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
