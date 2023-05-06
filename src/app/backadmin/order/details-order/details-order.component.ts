import { Component, OnInit } from '@angular/core';
import { CommandService } from '../../_services/command.service';
import { ActivatedRoute } from '@angular/router';
import { CommandLigne } from 'src/app/_models/_stock/commandLigne';
import { Product } from 'src/app/_models/_stock/product';

@Component({
  selector: 'app-details-order',
  templateUrl: './details-order.component.html',
  styleUrls: ['./details-order.component.css']
})
export class DetailsOrderComponent implements OnInit {

  idCommand!:any
  cmdl:CommandLigne []=[]
  prodList:Product [] = []

  constructor(
    private _orderService : CommandService,
    private _router : ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.idCommand = this._router.snapshot.params['id'];
    this.getProdsForCommand();
  }
  
  getProdsForCommand(){
    this._orderService.getProdsForCommand(this.idCommand).subscribe((data:any)=>{
      this.cmdl = data.body
      this.prodList = data.body.product
      console.log(this.cmdl)
      console.log(data.body.product)
    })
  }

}
