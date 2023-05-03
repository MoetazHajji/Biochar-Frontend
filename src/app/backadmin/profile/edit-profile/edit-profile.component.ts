import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ProfileService } from '../../_services/profile.service';
import { Profile } from 'src/app/_models/Profile';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {

  @Input() modalEditProfile: boolean = true;
  @Input() ProfileId: any
  @Output() closeModalEditProfile = new EventEmitter<boolean>();
  @Output() refreshProfile = new EventEmitter<boolean>();

  profile: Profile = new Profile();
  path: any = false;
  hideForm = false;
  submitted = false;
  constructor(private _profileService: ProfileService) { }

  ngOnInit(): void {
    this._profileService.getProfileById(this.ProfileId).subscribe((res: any) => {
      this.profile = res.body
      console.log(res.body)
    })
  }

  refresh(): void {
    window.location.reload();
  }

  EditProfile() {
    this._profileService.EditProfile(this.profile).subscribe((res: any) => {
      console.log(this.profile)
      this.refresh();
    })
  }

  cancel() {
    this.submitted = false
    this.hideForm = true;
    this.modalEditProfile = false;
    this.closeModalEditProfile.emit(this.modalEditProfile);
  }

}
