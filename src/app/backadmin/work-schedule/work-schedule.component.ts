import { Component, OnInit } from '@angular/core';
import { WorkScheduleService } from '../_services/work-schedule.service';

@Component({
  selector: 'app-work-schedule',
  templateUrl: './work-schedule.component.html',
  styleUrls: ['./work-schedule.component.css']
})
export class WorkScheduleComponent implements OnInit {

  constructor(private _wsService: WorkScheduleService) { }

  ngOnInit(): void {
  }

}
