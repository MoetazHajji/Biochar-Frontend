import { Appointment } from "./Appointment"; 
import { Gender } from "./Gender";
import { StateRegion } from "./StateRegion";
import { User } from "./User";

export class Account {
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
    user! : User; 
    appointments! : Appointment[];
}