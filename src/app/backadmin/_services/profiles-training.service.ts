import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Profile } from 'src/app/_models/_stock/profile';
import { Account } from 'src/app/_models/_user/Account';
import { Gender } from 'src/app/_models/_user/Gender';
import { StateRegion } from 'src/app/_models/_user/StateRegion';
import { User } from 'src/app/_models/_user/User';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProfilesTrainingService {
  url = "http://localhost:9022/biochar/training/profile/"
  constructor(private http: HttpClient) { }

  getProfiles() :Observable< Profile[]>
  {
   return this.http.get<Profile[]>(this.url + "profiles")
   
  }

  getAccounts() : Observable< Account[]>
  {
   return this.http.get<Account[]>(this.url +"accounts");
  }


  getAccountByMail(mail : string) : Observable<Account>
  {
    return this.http.get<Account>(this.url+"byMail/"+mail);
  }

  getProfileByAccount(id : number) : Observable<Profile>
  {
    return this.http.get<Profile>(this.url+"profileByAccId/"+id)
  }


  getAccountById(id : number) : Observable<Account>
  {
    return this.http.get<Account>(this.url+"accountById/"+id)
  }
  }

