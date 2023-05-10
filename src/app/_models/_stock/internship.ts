
import { Detail } from "./detail";
import { Diploma } from "./dipoloma";
import { FollowUpSheet } from "./followupsheet";
import { Internshiprequest } from "./internship_request";
import { State } from "./state2";
import { Subject } from "./subject2";

export class Internship{
  id! : number;
  nom? : string;
  prenom? : string;
  state! : State;
  subject! : Subject;
  internshipRequest? : Internshiprequest;
  followUpSheet? : FollowUpSheet;
  diploma? :Diploma;
  detail? : Detail;
}


