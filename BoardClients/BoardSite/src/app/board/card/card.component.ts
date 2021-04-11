import { Component, Input, OnInit } from '@angular/core';
import { Priority } from '../enums/priority';
import { Status } from '../enums/status';
import { TentSize } from '../enums/tentSize';
import { Epic } from '../modals/epic';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() status!: Status;
  @Input() epic!: Epic;
  
  public tentSize: string = "";
  public priority: string = "";
  public priorityClass: string = "";

  constructor() { }

  ngOnInit(): void {
    this.setTentSize();
    this.setPriority();
  }

  private setTentSize() {
    switch(this.epic.tentSize) {
      case TentSize.small:
        this.tentSize = "Small";
        break;

      case TentSize.medium:
        this.tentSize = "Medium";
        break;

      case TentSize.large:
        this.tentSize = "Large";
        break;
    }
  }

  private setPriority() {
    switch(this.epic.priority) {
      case Priority.low:
        this.priority = "Low";
        this.priorityClass = "low";
        break;

      case Priority.medium:
        this.priority = "Medium";
        this.priorityClass = "medium";
        break;

      case Priority.high:
        this.priority = "High";
        this.priorityClass = "high";
        break;
    }
  }
}
