import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import {HttpClient, HttpResponse} from "@angular/common/http";
import { Product } from 'src/app/_models/_stock/product';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  url = `${environment.apiBaseUrl}`
  constructor(private http:HttpClient) { }

  getAll() : Observable<HttpResponse<any>>{
    return this.http.get(`${this.url}/stock-service/product/getAllProducts` , {observe : 'response'})
  }

  getProductById(id:any) : Observable<HttpResponse<any>>{
    return this.http.get(`${this.url}/stock-service/product/getProduct/${id}`,{observe : 'response'})
  }

  addProduct(product:Product) : Observable<HttpResponse<any>> {
    return this.http.post(`${this.url}/stock-service/product/add`,product , {observe : 'response'})
  }

  DeleteProduct(id:any): Observable<HttpResponse<any>>{
    return this.http.delete(`${this.url}/stock-service/product/delete/${id}`, {observe : 'response'})
  }

  EditProduct(product:Product) : Observable<HttpResponse<any>>{
    return this.http.put(`${this.url}/stock-service/product/modify`, product , {observe : 'response'})
  }


  getOfferForProduct(id:any) : Observable<HttpResponse<any>>{
    return this.http.get(`${this.url}/stock-service/product/getOfferForProduct/${id}` , {observe : 'response'})
  }


  getMostOrdredProducts() : Observable<HttpResponse<any>>{
    return this.http.get(`${this.url}/stock-service/product/getMostOrdredProducts` , {observe : 'response'});
  }
  
}
