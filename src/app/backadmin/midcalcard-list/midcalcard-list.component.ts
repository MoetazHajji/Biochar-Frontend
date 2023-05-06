import { Component, Input, OnInit } from '@angular/core';
import { Medicalcard } from 'src/app/_models/medicalcard';
import { MedicalcardService } from '../_services/medicalcard.service';

@Component({
  selector: 'app-midcalcard-list',
  templateUrl: './midcalcard-list.component.html',
  styleUrls: ['./midcalcard-list.component.css']
})
export class MidcalcardListComponent implements OnInit {
  @Input() getProductId : any
  addNewProductModal:boolean = false;
  editProductModal:boolean = false;
  refreshSideBarProduct: boolean = false;
  openDetailPodModal:boolean = false;

  prodId: any

  // productList:Sample[]=[];
  productList:any
   sample : Medicalcard = new Medicalcard();
  constructor(private  _medicalcardService : MedicalcardService) { }

  ngOnInit(): void {
    this.getProductList();
  }
  getProductList(){
    this._medicalcardService.getAll().subscribe((res:any)=>{
      this.productList = res.body
    })
    console.log(this.productList)
  }
  DeleteProduct(idMedicalcard:any){
    let resp=this._medicalcardService.DeleteProduct(idMedicalcard);
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
