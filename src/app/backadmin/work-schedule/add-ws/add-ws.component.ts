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
  @Output() closeModalNewProfile = new EventEmitter<boolean>();
  @Output() refreshProfile = new EventEmitter<boolean>();


  ws: WorkSchedule = new WorkSchedule();

  path: any = false;
  hideForm = false;
  submitted = false;
  constructor(private _wsService: WorkScheduleService) { }

  ngOnInit(): void {
  }

  refresh(): void {
    window.location.reload();
  }

  addWorkS() {

  }

  cancel() {
    this.submitted = false
    this.hideForm = true;
    this.modalNewWorkSchedule = false;
    this.closeModalNewProfile.emit(this.modalNewWorkSchedule);
  }

}
