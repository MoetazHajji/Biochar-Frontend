import { Component, Input, OnInit } from '@angular/core';
import { TestResult } from 'src/app/_models/testresult';
import { TestresultService } from '../_services/testresult.service';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';


@Component({
  selector: 'app-testresult-list',
  templateUrl: './testresult-list.component.html',
  styleUrls: ['./testresult-list.component.css']
})
export class TestresultListComponent implements OnInit {

  @Input() getProductId : any
  addNewProductModal:boolean = false;
  editProductModal:boolean = false;
  refreshSideBarProduct: boolean = false;
  openDetailPodModal:boolean = false;

  prodId: any
  productLis:any



  //productList:TestResult[]=[];
  productList:any
  sample : TestResult = new TestResult();
  tutorials: any;
  currentTutorial = null;
  currentIndex = -1;
  title = '';

  page = 1;
  count = 0;
  pageSize = 3;
  pageSizes = [3, 6, 9];
  
  constructor(private _testresultService : TestresultService) { }

  ngOnInit(): void {
   this.getProductList();
  }


  getProductList(){
    this._testresultService.getAll().subscribe((res:any)=>{
      this.productList = res.body
    })
    console.log(this.productList)
  }
  
  handlePageChange($event:any): void {
    this.page = $event;
    this.getProductList();
  }

  handlePageSizeChange($event:any): void {
    this.pageSize = $event.target.value;
    this.page = 1;
    this.getProductList();
  }
  /*DeleteProduct(idTestResult:any){
    this._testresultService.DeleteProduct(idTestResult).subscribe({
      next:()=>this.productList=this.productList.filter((p)=> p.idTestResult!=idTestResult)
    })
  }*/



  DeleteProduct(idTestResult:any){
    let resp=this._testresultService.DeleteProduct(idTestResult);
    if (window.confirm('Are you sure you want to delete this shop?')) {
      resp.subscribe((data)=>this.productList=data);
          window.location.reload();}}
   
  

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
