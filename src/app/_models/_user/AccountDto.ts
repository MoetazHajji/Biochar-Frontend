import { Appointment } from "./Appointment";
import { Gender } from "./Gender";
import { Roles } from "./Roles";
import { Shift } from "./Shift";
import { StateRegion } from "./StateRegion";
import { Team } from "./Team";

export class AccountDto {
    id!: number; 
    createdAt!: Date ;
    firstname! : string ;
    lastname! : string ;
    cin!: number; 
    phone!: number;   
    dateOfBirth!: Date ; 
    hireDate!: Date ; 
    email! : string ;
    photo! : string ; 
    gender! : Gender;   
    state! : StateRegion;  
    city! : string ;
    zip_code!: number;  
    adresse! : string ; 
    roles! : Roles;
    appointments! : Appointment[];  
    team!: Team ;   
    shift!: Shift ;   
} 