import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/_models/_product/product';
import { ProductService } from '../../_services/product.service';

@Component({
  selector: 'app-details-product',
  templateUrl: './details-product.component.html',
  styleUrls: ['./details-product.component.css']
})
export class DetailsProductComponent implements OnInit {

  productId: any;
  detailedProduct : Product[]=[]
  constructor(
    private _route : ActivatedRoute,
    private _router: Router,
    private _productService : ProductService
  ) { }

  ngOnInit(): void {
    this.productId = this._route.snapshot.params['id'];
    this._productService.getProductById(this.productId).subscribe((res:any)=>{
      this.detailedProduct = res.body
    })
  }

}
