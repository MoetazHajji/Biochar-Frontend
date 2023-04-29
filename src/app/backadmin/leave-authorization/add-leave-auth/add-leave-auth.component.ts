import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { LeaveAuth } from 'src/app/_models/leaveAuth/leaveAuth';
import { LeaveAuthService } from '../../_services/leave-auth.service';
import { TypeLA } from 'src/app/_models/leaveAuth/typeLA';

@Component({
  selector: 'app-add-leave-auth',
  templateUrl: './add-leave-auth.component.html',
  styleUrls: ['./add-leave-auth.component.css']
})
export class AddLeaveAuthComponent implements OnInit {
  @Input() modalNewLeaveAuth: boolean = true
  @Output() closeModalNewProfile = new EventEmitter<boolean>();
  @Output() refreshProfile = new EventEmitter<boolean>();

  leaveAuth: LeaveAuth = new LeaveAuth();
  idA: number = 1;

  leaveAuthTypes = Object.keys(TypeLA);

  path: any = false;
  hideForm = false;
  submitted = false;
  constructor(private _leaveAuthService: LeaveAuthService) { }

  ngOnInit(): void {
  }

  refresh(): void {
    window.location.reload();
  }

  addLeaveAuth() {
    this._leaveAuthService.AddLA(this.idA, this.leaveAuth).subscribe((res: any) => {
      error: (err: any) => console.log(err)
      this.refresh();
    })
  }

  cancel() {
    this.submitted = false
    this.hideForm = true;
    this.modalNewLeaveAuth = false;
    this.closeModalNewProfile.emit(this.modalNewLeaveAuth);
  }


}
