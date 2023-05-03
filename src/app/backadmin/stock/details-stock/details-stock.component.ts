import { Component, OnInit } from '@angular/core';
import { StockService } from '../../_services/stock.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Stock } from 'src/app/_models/_stock/stock';
import { Product } from 'src/app/_models/_stock/product';

@Component({
  selector: 'app-details-stock',
  templateUrl: './details-stock.component.html',
  styleUrls: ['./details-stock.component.css']
})
export class DetailsStockComponent implements OnInit {

  detailedStock : Stock = new Stock();
  prodForStock : Product[]=[]
  stockid!:any
  quantityToAdd!:any

  constructor(
    private _stockService : StockService,
    private v: ActivatedRoute,
    private _router :Router
  ) { }

  ngOnInit(): void {
    this.stockid = this.v.snapshot.params['id']
    this._stockService.getStockById(this.stockid).subscribe((res:any)=>{
      this.detailedStock = res.body
      console.log(res.body)
    })
    this.getProdForStock(this.stockid);
   
  }

  getProdForStock(id:any){
    this._stockService.getProductsForStock(id).subscribe((res:any)=>{
      this.prodForStock=res.body
    })
  }

  withdraw(quantity:any){
    this._stockService.withdrawQuantity(this.stockid,quantity).subscribe((data:any)=>{
      console.log(data)
    })
  }
  

}
