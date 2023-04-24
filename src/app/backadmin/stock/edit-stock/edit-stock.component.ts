import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { Stock } from 'src/app/_models/_stock/stock';
import { StockService } from '../../_services/stock.service';

@Component({
  selector: 'app-edit-stock',
  templateUrl: './edit-stock.component.html',
  styleUrls: ['./edit-stock.component.css']
})
export class EditStockComponent implements OnInit {

  @Input() modalEditStock:boolean=true ;
  @Input() StockId : any
  @Output() closeModalEditStock=new EventEmitter<boolean>(); 
  @Output() refreshStock=new EventEmitter<boolean>();

  stock:Stock = new Stock();
  path: any = false;
  hideForm = false;
  submitted = false;
  editStockForm : UntypedFormGroup =this.formBuilder.group({
    image:[''],
    description:['']
  })
  constructor(private formBuilder : UntypedFormBuilder , private _stockService:StockService) { }

  ngOnInit(): void {
    this._stockService.getStockById(this.StockId).subscribe((res:any)=>{
      this.stock=res.body
    })
  }

  EditStock(){
    this._stockService.EditStock(this.stock).subscribe((res:any)=>{
      console.log(this.stock)
    })
  }
  cancel(){
    this.submitted = false
    this.hideForm = true;
    this.modalEditStock = false;
    this.editStockForm.reset();
    this.closeModalEditStock.emit(this.modalEditStock);
  }

}
