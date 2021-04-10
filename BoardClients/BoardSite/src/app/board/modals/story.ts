import { Priority } from "../enums/priority";
import { Status } from "../enums/status";
import { TentSize } from "../enums/tentSize";
import { BaseCard } from "./baseCard";

export class Story extends BaseCard {
    devResource: string;
    qaResource: string;

    constructor(
        title: string, 
        startDate: Date = new Date(), 
        endDate: Date = new Date(), 
        priority: Priority = Priority.low, 
        tentSize: TentSize = TentSize.mediumn,
        status: Status = Status.Todo,
        devResource: string,
        qaResource: string) {
        super(title, startDate, endDate, priority, tentSize, status);
        this.devResource = devResource;
        this.qaResource = qaResource;
    }
}