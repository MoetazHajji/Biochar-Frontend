import { Time } from "@angular/common";
import { Account } from "./Account";
import { AppointmentStatus } from "./AppointmentStatus";

export class Appointment {
    id!: number; 
    createdAt!: Date ; 
    reason! : string ; 
    comments! : string ;
    firstVisit! : boolean;
    appointmentStart!: Date ;  
    appointmentEnd!: Date ;  
    appointmentStatus !: AppointmentStatus;
    firstName! : string ; 
    lastName! : string ; 
   // account! : Account;
}
