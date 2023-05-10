import { Internship } from "./internship";
import { Status } from "./status";

export class Internshiprequest{
    id!:number;
    duration?:string;
    nom?:string;
    prenom?:string;
    motif?:string;
    motivation?:string;
    cv?:string;
    status?:Status
    start_date?:Date;
    end_date?:Date;
    internship! : Internship;
}