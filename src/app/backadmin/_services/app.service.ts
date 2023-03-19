import { Injectable } from '@angular/core';
import { Location } from '@angular/common';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  public urlChanged = new Subject();

  constructor(private location : Location) { 
    location.onUrlChange((url , state) => {
      this.urlChanged.next({url, state})
    })
  }
}
