import { Component, OnInit } from '@angular/core';
import { Command } from 'src/app/_models/_stock/command';
import { CommandService } from '../_services/command.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  orderList : Command [] =[]

  constructor(
    private _orderService:CommandService
  ) { }

  ngOnInit(): void {
    this.getAllOrders()
  }

  getAllOrders(){
    this._orderService.getAll().subscribe((data:any)=>{
      this.orderList = data.body;
      console.log(data)
    })
  }

}
