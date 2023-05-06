import { Time } from "@angular/common";
import { Shift } from "./shift";

export class WorkSchedule {
    id_WS?: number;
    dateWork?: Date;
    start_time?: Time;
    end_time?: Time;
    shift?: Shift;
}