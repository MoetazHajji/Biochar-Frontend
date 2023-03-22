import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/_models/_product/product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  productList:Product[]=[{id:1 , product_name:"MSI" , reference:"123AR" , quantity:100}];
  constructor() { }

  ngOnInit(): void {
  }

}
