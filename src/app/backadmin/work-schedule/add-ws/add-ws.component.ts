import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { WorkSchedule } from 'src/app/_models/workSchedule/workSchedule';
import { WorkScheduleService } from '../../_services/work-schedule.service';

@Component({
  selector: 'app-add-ws',
  templateUrl: './add-ws.component.html',
  styleUrls: ['./add-ws.component.css']
})
export class AddWsComponent implements OnInit {

  @Input() modalNewWorkSchedule: boolean = true
  @Output() closeModalNewWorkSchedule = new EventEmitter<boolean>();
  @Output() refreshWorkSchedule = new EventEmitter<boolean>();

  type_ws: any[] = []
  selectedValue!: string
  sunday!: Date
  startDate!: Date
  endDate!: Date
  dateValidation = false
  sValidation = false
  kelma!: string
  ws: WorkSchedule = new WorkSchedule();

  path: any = false;
  hideForm = false;
  submitted = false;
  constructor(private _wsService: WorkScheduleService) {
    this.startDate = new Date()
    this.endDate = new Date()
    this.sunday = new Date()
  }

  ngOnInit(): void {
  }

  refresh(): void {
    window.location.reload();
  }

  addWorkS() {
    console.log(this.startDate)
    // let start = this.startDate?.toISOString()
    //let end = this.endDate?.toISOString()

    // start = start.substring(0, 10)
    // end = end.substring(0, 10)

    this._wsService.addWorkSchedule(this.startDate, this.endDate).subscribe(
      (res: any) => {
        error: (err: any) => console.log(err)
        this.refresh();
      })
  }

  addSundayWorkS() {
    console.log(this.sunday)
    this._wsService.addSundayWorkSchedule(this.sunday).subscribe(
      (res: any) => {
        error: (err: any) => console.log(err)
        this.refresh();
      })
  }

  cancel() {
    this.submitted = false
    this.hideForm = true;
    this.modalNewWorkSchedule = false;
    this.closeModalNewWorkSchedule.emit(this.modalNewWorkSchedule);
  }

  dateVerification() {
    if (this.startDate! > this.endDate!) {
      this.dateValidation = true;
    } else {
      this.dateValidation = false;
    }
  }

  sundayVerification() {
    const dayOfWeek = new Date(this.sunday).getDay();
    if (dayOfWeek === 0) {
      console.log('Selected date is a Sunday');
      this.sValidation = false;
    } else {
      console.log('Selected date is not a Sunday');
      this.sValidation = true;
    }
  }

  addtab() {

    // this.type_ws.push(this.selectedValue);
    this.kelma = this.selectedValue
    console.log(this.kelma)
  }

}
