import { Time } from "@angular/common";
import { TypeLA } from "./typeLA";
import { StateLA } from "./stateLA";

export class LeaveAuth {
    id_LA?: number;
    start_date?: Date;
    end_date?: Date;
    authStartTime?: Time;
    authEndTime?: Time;
    remainingLeaveDays?: string;
    cause?: string;
    type_la?: TypeLA;
    state_la?: StateLA;
    account_id?: number
}