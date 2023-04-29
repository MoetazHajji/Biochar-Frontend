import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Profile } from 'src/app/_models/Profile';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  url = `${environment.apiBaseUrl}`
  constructor(private http: HttpClient) { }

  getAll(): Observable<HttpResponse<any>> {
    return this.http.get(`${this.url}/Profile/getAllProfiles`, { observe: 'response' })
  }

  getProfileById(id: any) {
    return this.http.get(`${this.url}/Profile/getProfileById/${id}`, { observe: 'response' })
  }

  addProfile(profile: Profile): Observable<HttpResponse<any>> {
    return this.http.post(`${this.url}/Profile/addProfile`, profile, { observe: 'response' })
  }

  DeleteProfile(id: any) {
    return this.http.delete(`${this.url}/Profile/deleteProfile/${id}`, { observe: 'response' })
  }

  EditProfile(profile: Profile) {
    return this.http.put(`${this.url}/Profile/updateProfile`, profile, { observe: 'response' })
  }
}
