import { Priority } from "../enums/priority";
import { Status } from "../enums/status";
import { TentSize } from "../enums/tentSize";

export class BaseCard {
    title: string;
    startDate: Date;
    endDate: Date;
    priority: Priority;
    tentSize: TentSize;
    status: Status;

    constructor(
        title: string, 
        startDate: Date, 
        endDate: Date,
        priority: Priority, 
        tentSize: TentSize,
        status: Status) {
        this.title = title;
        this.startDate = startDate;
        this.endDate = endDate;
        this.priority = priority;
        this.tentSize = tentSize;
        this.status = status;
    }
}