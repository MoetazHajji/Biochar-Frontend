import { Component, Input, OnInit } from '@angular/core';
import { LeaveAuth } from 'src/app/_models/leaveAuth/leaveAuth';
import { LeaveAuthService } from '../_services/leave-auth.service';

@Component({
  selector: 'app-leave-authorization',
  templateUrl: './leave-authorization.component.html',
  styleUrls: ['./leave-authorization.component.css']
})
export class LeaveAuthorizationComponent implements OnInit {

  @Input() getLeaveAuthId!: number
  editLeaveAuthModal: boolean = false;
  addLeaveAuthModal: boolean = false;
  refreshSideBarLeaveAuth: boolean = false;
  openDetailLeaveAuthModal: boolean = false;

  leaveAuthId: any;
  leaveAuthList!: LeaveAuth[];
  leaveAuthDetailedList: LeaveAuth[] = [];
  leaveAuth: LeaveAuth = new LeaveAuth();
  selected_id!: number;
  constructor(private _leaveAuthService: LeaveAuthService) { }

  ngOnInit(): void {

    this.getLeaveAuthList();
  }

  getLeaveAuthList() {
    this._leaveAuthService.getAll().subscribe((res: any) => {

      this.leaveAuthList = res.body
      console.log(this.leaveAuthList)
    })
  }

  refresh(): void {
    window.location.reload();
  }

  getLeaveAuthById() {
    this._leaveAuthService.getLAById(this.leaveAuthId).subscribe((res: any) => {
      this.leaveAuthList = res.body
    })
  }

  addLeaveAuth() {
    this.addLeaveAuthModal = !this.addLeaveAuthModal;
  }

  editLeaveAuth(event: number) {
    this.getLeaveAuthId = event
    this.editLeaveAuthModal = !this.editLeaveAuthModal;
    //this.getLeaveAuthById();
  }

  deleteLeaveAuth(id: any) {
    this._leaveAuthService.DeleteLA(id).subscribe({
      next: () => this.leaveAuthList = this.leaveAuthList.filter((la) => la.id_LA != id)
    })
  }

  updateRemainigDays() {
    this._leaveAuthService.UpdateRemainigDays().subscribe((res: any) => {
      this.refresh();
    })
  }

  closeModalNewLeaveAuth($event: any): void {
    this.addLeaveAuthModal = $event
  }


  actualiseLeaveAuth() {
    this.refreshSideBarLeaveAuth = true;
  }

  showDetails($event: any) {
    this.leaveAuthId = $event;
    this.openDetailLeaveAuthModal = !this.openDetailLeaveAuthModal;
  }

}
