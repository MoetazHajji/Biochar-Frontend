import { Diploma } from "./dipoloma";
import { Internship } from "./internship";

export class Detail{
    id! : number;
    university! : string;
    location_university! : string;
    phone_university? : string;
    diploma? : Diploma;
    level_of_study! : string;
    specialite! : string;
    Internship! : Internship;
  }