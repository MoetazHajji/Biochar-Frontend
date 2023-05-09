import { Component, OnInit } from '@angular/core';
import { EventSettingsModel, View, WorkHoursModel, ScheduleComponent } from '@syncfusion/ej2-angular-schedule';
import { DataManager, ODataV4Adaptor } from '@syncfusion/ej2-data';

@Component({
  selector: 'app-work-schedule',
  templateUrl: './work-schedule.component.html',
  styleUrls: ['./work-schedule.component.css']
})
export class WorkScheduleComponent implements OnInit {


  addNewWorkScheduleModal: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }


  public selectedDate: Date = new Date();
  public workHours: WorkHoursModel = { start: '07:00' };
  public dayOfWeekValue = '1';
  public currentView: View = 'Week';
  public readonly = true;
  /////////////
  private dataManager: DataManager = new DataManager({
    url: 'http://localhost:9060/biochar/WorkSchedule/getAllWorkSchedule',
    adaptor: new ODataV4Adaptor,
    crossDomain: true
  });
  public eventSettings: EventSettingsModel = { dataSource: this.dataManager };
  /////////////////


  AddWorkSchedule() {
    this.addNewWorkScheduleModal = !this.addNewWorkScheduleModal;
  }

  closeModalNewWorkSchedule($event: any): void {
    this.addNewWorkScheduleModal = $event
  }

}
