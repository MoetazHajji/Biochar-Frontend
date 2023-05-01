import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Stock } from 'src/app/_models/_stock/stock';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StockService {

  url = `${environment.apiBaseUrl}`
  constructor(
    private http:HttpClient
  ) { }

  getAll() : Observable<HttpResponse<any>>{
    return this.http.get(`${this.url}/stock-service/stock/getAllStocks` , {observe : 'response'});
  }

  getStockById(id : any) : Observable<HttpResponse<any>>{
    return this.http.get(`${this.url}/stock-service/stock/getStock/${id}` , {observe : 'response'});
  }

  addStock(stock:Stock) : Observable<HttpResponse<any>> {
    return this.http.post(`${this.url}/stock-service/stock/add`,stock , {observe : 'response'});
  }

  DeleteStock(id:any) : Observable<HttpResponse<any>>{
    return this.http.delete(`${this.url}/stock-service/stock/delete/${id}`,{observe : 'response'});
  }

  EditStock(stock:Stock) : Observable<HttpResponse<any>>{
    return this.http.put(`${this.url}/stock-service/stock/modify`, stock , {observe : 'response'});
  }

  getProductsForStock(idStock : any) : Observable<HttpResponse<any>>{
    return this.http.get(`${this.url}/stock-service/stock/getProdForStock/${idStock}` , {observe : 'response'})
  }

  withdrawQuantity(idStock:any,quantity:any) : Observable<HttpResponse<any>>{
    return this.http.put(`${this.url}/stock-service/stock/withdraw/${idStock}`,quantity,{observe : 'response'})
  }

  AssignProductToStock(idProd:any,idStock:any,quantity:any) : Observable<HttpResponse<any>>{
    return this.http.put(`${this.url}/stock-service/stock/AssignProductToStock/${idProd}/${idStock}`,quantity ,{observe : 'response'})
  }

}
