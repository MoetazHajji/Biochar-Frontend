import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AppService } from '../_services/app.service';

@Component({
  selector: 'app-admin-layout',
  templateUrl: './admin-layout.component.html',
  styleUrls: ['./admin-layout.component.css']
})
export class AdminLayoutComponent implements OnInit {
  private subUrlChanged: Subscription | undefined;
  private sidebarFilters: boolean | undefined;
  private currentFilter: string | undefined;
  constructor(
    private appService : AppService
  ) {
    this.subUrlChanged = this.appService.urlChanged.subscribe((e : any ) => {
      let $this = this;
      setTimeout(()=>{
        if(e.url.indexOf('product')){
          $this.currentFilter = 'product';
          $this.sidebarFilters = false;
        }
      })
    })
   }

  ngOnInit(): void {
  }

}
