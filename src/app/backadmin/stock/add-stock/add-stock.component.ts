import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { Stock } from 'src/app/_models/_stock/stock';
import { StockService } from '../../_services/stock.service';
import { Type_product } from 'src/app/_models/_stock/Type_product';

@Component({
  selector: 'app-add-stock',
  templateUrl: './add-stock.component.html',
  styleUrls: ['./add-stock.component.css']
})
export class AddStockComponent implements OnInit {

  @Input() modalNewStock : boolean= true
  @Output() closeModalNewStock=new EventEmitter<boolean>(); 
  @Output() refreshStock=new EventEmitter<boolean>();

  stock:Stock = new Stock();

  createStockForm : UntypedFormGroup =this.formBuilder.group({
    image:[''],
    description:['']
  })
  path: any = false;
  hideForm = false;
  submitted = false;
  productTypes = Object.keys(Type_product)
  constructor(private formBuilder : UntypedFormBuilder,private _stockService:StockService ) { }

  ngOnInit(): void {
  }

  addStock() {
    this._stockService.addStock(this.stock).subscribe((res:any) => {
      error : (err:any) => console.log(err)
      this.refresh();
    }) 
  }
  refresh(): void {
    window.location.reload();
  }


  cancel(){
    this.submitted = false
    this.hideForm = true;
    this.modalNewStock = false;
    this.createStockForm.reset();
    this.closeModalNewStock.emit(this.modalNewStock);
  }


}
