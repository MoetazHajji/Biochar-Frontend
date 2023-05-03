import { Time } from "@angular/common";
import { Type_training } from "./Type_training";

export class Training {
    id_training!: number;
    start_date!: Date;
    end_date!: Date;
    location!: string;
    duration?: number;
    time?: string;
    title!: string;
    subject?: string;
    description?: string;
    image?: string;
    type?: Type_training;

    trainer?: string;
    trainees?: string[];
    certificate?: number;
    reviews?: number[];
    quizes?: string[];
    demands?: number[];
}