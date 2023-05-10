import { Option } from "./option";
import { Test } from "./Test";

export class Question{
    id! : number;
    text! : string;
    test! : Test;
    options! : Option[];
  }
  
