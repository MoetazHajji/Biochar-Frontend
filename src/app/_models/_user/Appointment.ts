import { Account } from "./Account";
import { AppointmentStatus } from "./AppointmentStatus";

export class Appointment {
    id!: number; 
    createdAt!: Date ; 
    reason! : string ; 
    comments! : string ;
    firstVisit! : boolean;
    appointmentDate!: Date ; 
    appointmentStartTime!: Date ; 
    appointmentEndTime !: Date ; 
    appointmentStatus !: AppointmentStatus;
    account! : Account;
}
