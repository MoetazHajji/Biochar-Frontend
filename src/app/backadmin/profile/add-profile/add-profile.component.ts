import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { UntypedFormArray, UntypedFormGroup } from '@angular/forms';
import { ProfileService } from '../../_services/profile.service';
import { Profile } from 'src/app/_models/Profile';

@Component({
  selector: 'app-add-profile',
  templateUrl: './add-profile.component.html',
  styleUrls: ['./add-profile.component.css']
})
export class AddProfileComponent implements OnInit {

  @Input() modalNewProfile: boolean = true
  @Output() closeModalNewProfile = new EventEmitter<boolean>();
  @Output() refreshProfile = new EventEmitter<boolean>();

  profile: Profile = new Profile();


  path: any = false;
  hideForm = false;
  submitted = false;
  constructor(private _profileService: ProfileService) { }

  ngOnInit(): void {
  }

  refresh(): void {
    window.location.reload();
  }

  addProfile() {
    this._profileService.addProfile(this.profile).subscribe((res: any) => {
      error: (err: any) => console.log(err)
      this.refresh();
    })
  }

  cancel() {
    this.submitted = false
    this.hideForm = true;
    this.modalNewProfile = false;
    this.closeModalNewProfile.emit(this.modalNewProfile);
  }

}
