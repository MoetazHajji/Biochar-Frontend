import { Component, OnInit } from '@angular/core';
import { TimeOff } from 'src/app/_models/_user/TimeOff';
import { TypeTimeOff } from 'src/app/_models/_user/TypeTimeOff';
import { TimeoffService } from '../../_services/_user/timeoff.service';
import { Time } from '@angular/common';

@Component({
  selector: 'app-list-timeoff',
  templateUrl: './list-timeoff.component.html',
  styleUrls: ['./list-timeoff.component.css']
})
export class ListTimeoffComponent implements OnInit {
   timeoffList:TimeOff[]=[];
   timeoffListFilter:TimeOff[]=[];
  addNewTimeoffModal:boolean = false;
  deleteRowTimeoffModal:boolean = false; 
  deleteRowId?:number; 

  searchTerm! : string;
  constructor( public timeoffService : TimeoffService) { }

  ngOnInit(): void {
   this.selectAll_TimeOff();
  }

  closeModalNewTimeOff($event : any) : void{
     this.addNewTimeoffModal = $event
   }
 



  selectAll_TimeOff(){
    /*this.timeoffList = [
      {id : 1, titre:"fichta", typeTimeOff: TypeTimeOff.DateTime, startDate: "2023-02-23", startTime :  "15:00:00", 
      endDate : "2023-02-23" , endTime : "15:00:00"}];*/

     
        this.timeoffService.getAll().subscribe((res:any)=>{
          console.log(res.body) 
          this.timeoffList = res.body;this.timeoffListFilter= res.body;
        })
        console.log(this.timeoffList) ;
  }
  delete_TimeOff(id:any){
    this.deleteRowTimeoffModal = true;
    this.deleteRowId = id ; 
   
  }
  deleteAll_TimeOff(){
    console.log(  "deleteAll_TimeOff");
    this.timeoffService.stateModalConfirm = true;
   }
  selectById_TimeOff(id:any){
    console.log(  "selectById_TimeOff" +id);
  }
  onSearch(): void {
   console.log( this.searchTerm );
  }
  insert_TimeOff(){ 
    this.addNewTimeoffModal = !this.addNewTimeoffModal;
    this.timeoffService.goToComponent('/admin/timeoff/add');
    console.log(  "insert_TimeOff" );
  }
  update_TimeOff(timeoff: TimeOff){
   this.timeoffService.selectTimeOff = timeoff;
    this.timeoffService.goToComponent('/admin/timeoff/edit');
     
    }



  actualiseTimeOff(){
   // this.refreshSideBarProduct=true;
  }
  

  showDetails($event:any){
   // this.prodId = $event;
   // this.openDetailPodModal = !this.openDetailPodModal;
  }
    confirmModalNoEventDeleteAllTimeoff($event : any) : void{
    console.log(  "confirmModalNoEventDeleteAllTimeoff" );
   // this.timeoffService.deleteAll()
    this.timeoffService.stateModalConfirm = $event
    console.log( $event);
  }
  confirmModalYesEventDeleteAllTimeoff($event : any) : void{
    console.log(  "confirmModalYesEventDeleteAllTimeoff" );
    this.timeoffService.deleteAll().subscribe((response) => { this.timeoffList=[];  this.timeoffService.stateModalConfirm = $event }
    ,(error) => { console.log(error); }) ;
   
    console.log(  $event );
  }
  confirmModalNoEventDeleteTimeoff($event : any) : void{
    console.log(  "confirmModalNoEventDeleteTimeoff" );
    this.deleteRowTimeoffModal = $event
    console.log( $event);
  }
  confirmModalYesEventDeleteTimeoff($event : any) : void{
    console.log(  "confirmModalYesEventDeleteTimeoff" );
    this.deleteRowTimeoffModal  = $event
    this.timeoffService.delete(this.deleteRowId).subscribe({
      next:()=>this.timeoffList=this.timeoffList.filter((p)=> p.id!=this.deleteRowId)
    }) 
  }






  searchText!: string;
  search() {
  this.  searchByTitle()

 }
 
 public searchByTitle(): void {
  // Filter the trainings array by title
  this.timeoffList =   this.timeoffListFilter;
  if(this.searchText == "")
  {
    this.timeoffList =   this.timeoffListFilter;
    return;
  } 
  this.timeoffList = this.timeoffList.filter(to => {
    return to.titre.toLowerCase().includes(this.searchText.toLowerCase())
    ||
    this.formatDate(to.startDate ).includes(this.searchText) 
    ||
    this.formatDate(to.endDate ).includes(this.searchText) 
   // || this.formatTime(to.startTime ).includes(this.searchText) 
    ;
  });
}


 formatDate(date:Date) : string {
  var d = new Date(date),
      month = '' + (d.getMonth() + 1),
      day = '' + ( d.getDate()+1),
      year = d.getFullYear();

  if (month.length < 2) { month = '0' + month;} 
  if (day.length < 2) {day = '0' + day;} 
  return [year, month, day].join('-');
}
formatTime(time :Time) : string {
  var hours;
  var minutes;
  hours = time.hours.toString;
  minutes = time.minutes.toString
  if (hours == null) { hours = "";} 
  if (minutes == null) {minutes = "";}


  return [ time.hours.toString, time.minutes.toString].join(':');
}
}
