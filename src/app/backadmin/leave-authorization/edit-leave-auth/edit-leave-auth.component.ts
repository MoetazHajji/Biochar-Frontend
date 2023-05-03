import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { LeaveAuthService } from '../../_services/leave-auth.service';
import { LeaveAuth } from 'src/app/_models/leaveAuth/leaveAuth';
import { StateLA } from 'src/app/_models/leaveAuth/stateLA';

@Component({
  selector: 'app-edit-leave-auth',
  templateUrl: './edit-leave-auth.component.html',
  styleUrls: ['./edit-leave-auth.component.css']
})
export class EditLeaveAuthComponent implements OnInit {

  @Input() modalEditLeaveAuth: boolean = true;
  @Input() LeaveAuthId!: number
  @Output() closeModalEditLeaveAuth = new EventEmitter<boolean>();
  @Output() refreshProfile = new EventEmitter<boolean>();

  state: StateLA[] = []

  stateTypes = Object.keys(StateLA);

  leaveAuth: LeaveAuth = new LeaveAuth();
  path: any = false;
  hideForm = false;
  submitted = false;
  constructor(private _leaveAuthService: LeaveAuthService) { }

  ngOnInit(): void {
    console.log(this.leaveAuth)
    console.log(this.stateTypes)
    this._leaveAuthService.getLAById(this.LeaveAuthId).subscribe((res: any) => {
      this.leaveAuth = res.body
    })
  }

  refresh(): void {
    window.location.reload();
  }

  EditLeaveAuth(id: any) {
    this._leaveAuthService.EditLA(id, this.leaveAuth).subscribe((res: any) => {
      this.refresh();
    })
  }

  cancel() {
    this.submitted = false
    this.hideForm = true;
    this.modalEditLeaveAuth = false;
    this.closeModalEditLeaveAuth.emit(this.modalEditLeaveAuth);
  }

}
