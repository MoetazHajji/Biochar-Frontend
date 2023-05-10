import { Question } from "./question";


export class Option{
    id! : number;
    text! : string;
    correct : boolean = false;
    question! : Question;
  }
  