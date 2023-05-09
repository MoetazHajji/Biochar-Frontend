import { Component, OnInit } from '@angular/core';
import { CommandLigneService } from '../../_services/command-ligne.service';
import { CommandLigne } from 'src/app/_models/_stock/commandLigne';
import { Product } from 'src/app/_models/_stock/product';
import { CommandService } from '../../_services/command.service';
import { Command } from 'src/app/_models/_stock/command';
import { Router } from '@angular/router';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css']
})
export class PanierComponent implements OnInit {
  parentNode!:any

  cmdL!:CommandLigne
  prod!:Product
  order : Command = new Command()
  ListProducts!: any
  constructor(
    private _cmdlService: CommandLigneService,
    private _orderService: CommandService,
    private _router : Router
  ) { }

  ngOnInit(): void {
    this.ListProducts = localStorage.getItem('idCmdlForPanier')
    this.getCommandLigneId(this.ListProducts);
    console.log(this.ListProducts)
  }

  getCommandLigneId(id:any){
    this._cmdlService.getCmdlById(id).subscribe((data:any)=>{
      this.cmdL = data.body
      this.prod = data.body.product
      console.log(data.body.product)
    })
  }

  removeFromStorage (){
    localStorage.removeItem('idCmdlForPanier')
    this.refresh();
  }

  refresh(): void {
    window.location.reload();
  }

  orderProducts(){
    this._orderService.addCommand(this.ListProducts,this.order).subscribe((data:any)=>{
      this.removeFromStorage();
      next :()=>this._router.navigateByUrl('/admin/orders')
      console.log(data)
    })
  }


}
