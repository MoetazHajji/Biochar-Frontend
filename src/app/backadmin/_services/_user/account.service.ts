import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AccountDto } from 'src/app/_models/_user/AccountDto';
import { Appointment } from 'src/app/_models/_user/Appointment';
import { Roles } from 'src/app/_models/_user/Roles';
import { Shift } from 'src/app/_models/_user/Shift';
import { StateRegion } from 'src/app/_models/_user/StateRegion';
import { Team } from 'src/app/_models/_user/Team';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  url = `${environment.apiBaseUrl}`
  selectAccount : AccountDto = new AccountDto(); 
  ListAccounts:AccountDto[]=[];
  constructor(private http:HttpClient, private router: Router,    private activeRoute: ActivatedRoute) { }
  goToComponent(component:string) {this.router.navigateByUrl(component);} // eq de routerLink="child1"
  getAll() : Observable<HttpResponse<any>>{
    return this.http.get(`${this.url}/user-service/account` , {observe : 'response'})
  }
  getById(id: any) : Observable<HttpResponse<any>>{
    return this.http.get(`${this.url}/user-service/account/${id}` , {observe : 'response'})
  }
  getByUsername(usename: any) : Observable<HttpResponse<any>>{
    return this.http.get(`${this.url}/user-service/account/selectbyUsername/${usename}` , {observe : 'response'})
  }
  update(account:AccountDto) : Observable<HttpResponse<any>>{
    return this.http.put(`${this.url}/user-service/account`,account , {observe : 'response'})
  }

    //http://localhost:8099/biochar/user-service/account/addAppointementToUsername/belhsen97
    addAppointementToUsername(   username : string ,  appointment :Appointment ): Observable<HttpResponse<any>>{
      return this.http.put(`${this.url}/user-service/account/addAppointementToUsername/${username}`,appointment , {observe : 'response'})
    }

  delete(id:any) : Observable<HttpResponse<any>>{
    return this.http.delete(`${this.url}/user-service/account/${id}`, {observe : 'response'})
  }
 
  getByIdpathParam(key:any) : Observable<HttpResponse<any>>{
    var keyValue  = this.activeRoute.snapshot.params[key]
    console.log(keyValue)
    return this. getById(keyValue);
  }

  listRolesOptions = [  { label: 'Doctor', value:  Roles.Doctor },  { label: 'TeaReceptionistm_B', value: Roles.Receptionist },
  { label: 'Biologist', value:  Roles.Biologist },  { label: 'Chief_Service', value: Roles.Chief_Service },
  { label: 'Intern', value:  Roles.Intern },  { label: 'Patient', value: Roles.Patient } 
];

  listTeamOptions = [  { label: 'Team_A', value:  Team.Team_A },  { label: 'Team_B', value: Team.Team_B }  ];
  // fruitValues = Object.values(Team);

  listShiftOptions = [  { label: 'Morning', value:  Shift.Morning },{ label: 'Afternoon', value:  Shift.Afternoon }, 
 { label: 'Night', value:  Shift.Night }, { label: 'Night_Guard', value:  Shift.Night_Guard }, 
 { label: 'Day_Guard', value:  Shift.Day_Guard }  ]; 

  listStateRegion = [  { label: 'Ariana', value:  StateRegion.Ariana },  
  { label: 'Beja', value:  StateRegion.Beja },  { label: 'Bizerte', value:  StateRegion.Bizerte }, 
  { label: 'Gabes', value:  StateRegion.Gabes },   { label: 'Gafsa', value:  StateRegion.Gafsa }, 
  { label: 'Jendouba', value:  StateRegion.Jendouba },   { label: 'Kairouan', value:  StateRegion.Kairouan }, 
  { label: 'Kasserine', value:  StateRegion.Kasserine }, { label: 'Manouba', value:  StateRegion.Manouba },  
  { label: 'Kef', value:  StateRegion.Kef },  { label: 'Mahdia', value:  StateRegion.Mahdia }, 
  { label: 'Medenine', value:  StateRegion.Medenine },   { label: 'Monastir', value:  StateRegion.Monastir }, 
  { label: 'Nabeul', value:  StateRegion.Nabeul },   { label: 'Sfax', value:  StateRegion.Sfax }, 
  { label: 'Sidi_Bouzid', value:  StateRegion.Sidi_Bouzid },   { label: 'Siliana', value:  StateRegion.Siliana }, 
  { label: 'Sousse', value:  StateRegion.Sousse },  { label: 'Tataouine', value:  StateRegion.Tataouine },  
  { label: 'Tozeur', value:  StateRegion.Tozeur },   { label: 'Tunis', value:  StateRegion.Tunis },
   { label: 'Zaghouan', value:  StateRegion.Zaghouan }    ];
}
