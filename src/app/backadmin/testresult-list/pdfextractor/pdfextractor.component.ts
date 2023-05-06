import { HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { TestResult } from 'src/app/_models/testresult';
import { TestresultService } from '../../_services/testresult.service';

@Component({
  selector: 'app-pdfextractor',
  templateUrl: './pdfextractor.component.html',
  styleUrls: ['./pdfextractor.component.css']
})
export class PdfextractorComponent implements OnInit {
  productList:TestResult[]=[];
  id:number=1
  constructor(private _testresultService : TestresultService) { }

  ngOnInit(): void {
    //this.exportPdf();
  }

 /* getProductList(){
    this._testresultService.exportpdf(this.id).subscribe((res:any)=>{
      this.productList = res.body
    })
    console.log(this.productList)
  }*/
 /* uploadFile(file: File): Observable<any> {
    const formData = new FormData();
    
    // Check if the file is defined before appending it to the form data
    if (file) {
      formData.append('file', file, file.name);
    }
  
    return this.http.post(`${this.url}/upload`, formData);
  }*/
  exportPdf() {
    const id = 1; // Set the ID of the item to export

    this._testresultService.exportpdf(this.id).subscribe(x => {
      // Create a URL for the PDF blob
      const blob = new Blob([x], { type: 'application/pdf' });
      const data = window.URL.createObjectURL(blob);

      // Download the PDF file
      const link = document.createElement('a');
      link.href = data;
      link.download = 'test.pdf';
      link.dispatchEvent(new MouseEvent('click',{bubbles:true,cancelable:true,view:window}));
    setTimeout(function(){
      window.URL.revokeObjectURL(data);
      link.remove();
    },100
    
    );
     
    });
  }
}
