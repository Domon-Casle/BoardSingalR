import { Priority } from "../enums/priority";
import { Status } from "../enums/status";
import { TentSize } from "../enums/tentSize";
import { BaseCard } from "./baseCard";

export class Story extends BaseCard {
    devResource: string;
    qaResource: string;

    constructor(
        Id: number,
        title: string, 
        startDate: Date = new Date(), 
        endDate: Date = new Date(), 
        priority: Priority = Priority.low, 
        tentSize: TentSize = TentSize.medium,
        status: Status = Status.Todo,
        devResource: string,
        qaResource: string) {
        super(Id, title, startDate, endDate, priority, tentSize, status);
        this.devResource = devResource;
        this.qaResource = qaResource;
    }
}