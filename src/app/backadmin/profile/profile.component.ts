import { Component, Input, OnInit } from '@angular/core';
import { ProfileService } from '../_services/profile.service';
import { Profile } from 'src/app/_models/Profile';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  @Input() getProfileId: any
  addNewProfileModal: boolean = false;
  editProfileModal: boolean = false;
  refreshSideBarProfile: boolean = false;
  openDetailProfileModal: boolean = false;

  profileId: any;
  profileList: Profile[] = [];
  profileDetailedList: Profile[] = [];
  profile: Profile = new Profile();
  constructor(private _profileService: ProfileService) { }

  ngOnInit(): void {
    this.getProfileList();
  }

  getProfileList() {
    this._profileService.getAll().subscribe((res: any) => {
      this.profileList = res.body
      console.log(res.body)
    });

  }

  DeleteProfile(id: any) {
    this._profileService.DeleteProfile(id).subscribe({
      next: () => this.profileList = this.profileList.filter((p) => p.id != id)
    })
  }

  getProfileById(id: any) {
    this._profileService.getProfileById(id).subscribe((res: any) => {
      this.profileList = res.body
    })
  }

  AddProfile() {
    this.addNewProfileModal = !this.addNewProfileModal;
  }

  closeModalNewProfile($event: any): void {
    this.addNewProfileModal = $event
  }

  actualiseProfile() {
    this.refreshSideBarProfile = true;
  }

  EditProfile(event: any) {
    this.getProfileId = event
    this.editProfileModal = !this.editProfileModal;
  }

  showDetails($event: any) {
    this.profileId = $event;
    this.openDetailProfileModal = !this.openDetailProfileModal;
  }

  refresh(): void {
    window.location.reload();
  }

  updateExperience() {
    this._profileService.UpdateExperience().subscribe((res: any) => {
      this.refresh();
    })
  }

}
