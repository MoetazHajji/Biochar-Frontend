import { Component, Input, OnInit } from '@angular/core';
import { Stock } from 'src/app/_models/_stock/stock';
import { StockService } from '../_services/stock.service';

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.css']
})
export class StockComponent implements OnInit {

  @Input() getStockId : any
  addNewStockModal:boolean = false;
  editStockModal:boolean = false;
  refreshSideBarStock: boolean = false;
  openDetailPodModal:boolean = false;

  stockId: any

  stockList:Stock[]=[];
  StockDetailedList:Stock[]=[];
  Stock : Stock = new Stock();

  stockIdToDelete!:any

  constructor(private _stockService : StockService) { }

  ngOnInit(): void {
   this.getStockList();
  }

  getStockList(){
    this._stockService.getAll().subscribe((res:any)=>{
      this.stockList = res.body
    })
  }

  DeleteStock(id:any){
    this._stockService.DeleteStock(id).subscribe({
      next:()=>this.stockList=this.stockList.filter((p)=> p.id!=id),
    },
    )
  }

  refresh(): void {
    window.location.reload();
  }

  getStockById(id:any){
    this._stockService.getStockById(id).subscribe((res:any)=>{
      this.stockList = res.body
    })
  }

  AddNewStock(){
    this.addNewStockModal = !this.addNewStockModal;
  }

  closeModalNewStock($event : any) : void{
    this.addNewStockModal = $event
  }

  actualiseStock(){
    this.refreshSideBarStock=true;
  }
  
  EditStock(event: any){
    this.getStockId = event
    this.editStockModal = !this.editStockModal;
  }
  
  showDetails($event:any){
    this.stockId = $event;
    this.openDetailPodModal = !this.openDetailPodModal;
  }

}
