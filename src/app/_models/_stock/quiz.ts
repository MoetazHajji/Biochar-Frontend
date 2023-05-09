import { Type_Q } from "./type_quiz";

export class Quiz {
    id_quiz! : number;
    question! : string;
    answer_1! : string;
    answer_2! : string;
    answer_3? : string;
    answer_4? : string;
    valid : number[] = [];
    type! : Type_Q;

}
