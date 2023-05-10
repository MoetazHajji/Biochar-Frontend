import { Component, OnInit } from '@angular/core';
import { EventSettingsModel, View, WorkHoursModel, ScheduleComponent } from '@syncfusion/ej2-angular-schedule';
import { DataManager, ODataV4Adaptor } from '@syncfusion/ej2-data';
import { geyWorkScheduleList } from './work-schedule-script.js';
import { WorkScheduleService } from '../_services/work-schedule.service';
import { CalenderGroupWSDto } from 'src/app/_models/workSchedule/CalenderGroupWSDto';
@Component({
  selector: 'app-work-schedule',
  templateUrl: './work-schedule.component.html',
  styleUrls: ['./work-schedule.component.css']
})
export class WorkScheduleComponent implements OnInit {

  cwsList!: CalenderGroupWSDto[];
  addNewWorkScheduleModal: boolean = false;

  constructor(private _wsService: WorkScheduleService) { }

  ngOnInit(): void {
    this.getCalenderWSList();
  }

  getCalenderWSList() {
    this._wsService.getAll().subscribe((res: any) => {

      this.cwsList = res.body
      console.log(this.cwsList);
      console.log(this._wsService.convert(this.cwsList));
      geyWorkScheduleList(this._wsService.convert(this.cwsList));
    })
  }

  AddWorkSchedule() {
    this.addNewWorkScheduleModal = !this.addNewWorkScheduleModal;
  }

  closeModalNewWorkSchedule($event: any): void {
    this.addNewWorkScheduleModal = $event
  }

}

