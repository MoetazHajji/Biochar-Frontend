import { Component, OnInit } from '@angular/core';
import { TestresultService } from 'src/app/backadmin/_services/testresult.service';
import { TestResult } from 'src/app/_models/testresult';

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

  }
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
