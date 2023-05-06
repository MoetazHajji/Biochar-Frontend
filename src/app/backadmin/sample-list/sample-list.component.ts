import { Component, Input, OnInit } from '@angular/core';
import { Sample } from 'src/app/_models/sample';
import { SampleService } from '../_services/sample.service';

@Component({
  selector: 'app-sample-list',
  templateUrl: './sample-list.component.html',
  styleUrls: ['./sample-list.component.css']
})
export class SampleListComponent implements OnInit {
  @Input() getProductId : any
  addNewProductModal:boolean = false;
  editProductModal:boolean = false;
  refreshSideBarProduct: boolean = false;
  openDetailPodModal:boolean = false;

  prodId: any

 // productList:Sample[]=[];
 productList:any
  sample : Sample = new Sample();
  
  constructor(private _sampleService : SampleService) { }

  ngOnInit(): void {
   this.getProductList();
  }

  getProductList(){
    this._sampleService.getAll().subscribe((res:any)=>{
      this.productList = res.body
    })
    console.log(this.productList)
  }
 /* DeleteProduct(idSample:any){
    this._sampleService.DeleteProduct(idSample).subscribe({
      next:()=>this.productList=this.productList.filter((p)=> p.idSample!=idSample)
    })
  }*/
  
  DeleteProduct(idSample:any){
    let resp=this._sampleService.DeleteProduct(idSample);
    if (window.confirm('Are you sure you want to delete this Sample?')) {
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
