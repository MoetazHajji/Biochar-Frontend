import { compileNgModule } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import { map, Observable } from 'rxjs';
import { BarResponse } from 'src/app/_models/barresponse';
import { StatistiqueService } from '../_services/statistique.service';

@Component({
  selector: 'app-analysis-statistique',
  templateUrl: './analysis-statistique.component.html',
  styleUrls: ['./analysis-statistique.component.css']
})
export class AnalysisStatistiqueComponent implements OnInit {

  productList:BarResponse[]=[];
 // sample : Sample = new Sample();
  
  constructor(private _statistiqueservice: StatistiqueService) { }
   d!:number;
   e!:number;
   f!:number;
   ngOnInit(): void {
    this.getProductList4().subscribe((value: number) => {
      this.d = value;
      console.log(this.d);
      if (this.d !== undefined && this.e !== undefined && this.f !== undefined) {
        this.RenderChart(this.d, this.e, this.f);
      }
    });
  
    this.getProductList6().subscribe((value: number) => {
      this.e = value;
      console.log(this.e);
      if (this.d !== undefined && this.e !== undefined && this.f !== undefined) {
        this.RenderChart(this.d, this.e, this.f);
      }
    });
  
    this.getProductList5().subscribe((value: number) => {
      this.f = value;
      console.log(this.f);
      if (this.d !== undefined && this.e !== undefined && this.f !== undefined) {
        this.RenderChart(this.d, this.e, this.f);
      }
    });
  }
  getProductList1(){
    let a:any
    this._statistiqueservice.getAll().subscribe((res:any)=>{
      this.productList = res.body
      console.log(res.body)
      let a:any=res.body.labels[0]
      console.log(a);
    })
   
    console.log(this.productList)
    return a;
  }

  getProductList2(){
    let a:any
    this._statistiqueservice.getAll().subscribe((res:any)=>{
      this.productList = res.body
      console.log(res.body)
      let a:any=res.body.labels[1]
      console.log(a);
    })
   
    console.log(this.productList)
    return a;
  }
  
  getProductList3(){
    let a:any
    this._statistiqueservice.getAll().subscribe((res:any)=>{
      this.productList = res.body
      console.log(res.body)
      let a:any=res.body.labels[2]
      console.log(a);
    })
   
    console.log(this.productList)
    return a;
  }

   
  getProductList4(): Observable<number> {
    return this._statistiqueservice.getAll().pipe(
      map((res: any) => {
        this.productList = res.body;
        console.log(res.body);
        const a = res.body.values[0];
        console.log(a);
        return a ;
      })
    );
  }

     
  getProductList5(): Observable<number>{
    return this._statistiqueservice.getAll().pipe(
      map((res: any) => {
        this.productList = res.body;
        console.log(res.body);
        const a = res.body.values[1];
        console.log(a);
        return a ;
      })
    );
  }
  
  getProductList6(): Observable<number> {
    return this._statistiqueservice.getAll().pipe(
      map((res: any) => {
        this.productList = res.body;
        console.log(res.body);
        const a = res.body.values[2];
        console.log(a);
        return a ;
      })
    );
  }
  

  RenderChart(d:number,e:number,f:number){
    const canvasElement: HTMLCanvasElement | null = document.getElementById('piechart') as HTMLCanvasElement;
if (canvasElement) {
  const ctx: CanvasRenderingContext2D = canvasElement.getContext('2d')!;
  
  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['Babies','Young','overage'],
      datasets: [{
        label: 'Age Categories',
        data: [d, e, f],
        borderWidth: 1,
       // backgroundColor: 'Turquoise'
      }]
    },
   
  });
}

}
}