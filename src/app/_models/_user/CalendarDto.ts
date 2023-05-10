export class CalendarDto {
    id!: string;
  //  groupId!: string;
    title!: string;
    start!: Date ; // appointmentDate + appointmentStartTime
    end!: Date; // appointmentDate + appointmentEndTime
    color!: string;
   // backgroundColor!: string;
    editable: boolean = false ; 
   // url!: string;
 }