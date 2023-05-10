import { Time } from "@angular/common";
import { TypeTimeOff } from "./TypeTimeOff";

export class TimeOff {
    id!: number;
    titre! : string ;  
    typeTimeOff! : TypeTimeOff; 
    startDate !: Date ;
    startTime !: Time ;
    endDate !: Date ;
    endTime !: Time ;
}
