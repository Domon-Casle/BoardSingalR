import { Component, Input, OnInit, Output } from '@angular/core';
import { Subject } from 'rxjs';
import { DragService } from 'src/app/services/drag.service';
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
  
  @Output() dropEvent: Subject<Status> = new Subject<Status>();

  public tentSize: string = "";
  public priority: string = "";
  public priorityClass: string = "";

  constructor(
    private dragService: DragService
  ) { }

  ngOnInit(): void {
    this.setTentSize();
    this.setPriority();
  }

  public dragStart(event: DragEvent) {
    event.stopPropagation();
    this.dragService.setDragItem(this.epic);
  }

  public drop(event: DragEvent) {
    event.preventDefault();
    event.stopPropagation();
    console.log('drop card');
    this.dropEvent.next(this.status);
  }

  public allowDrop(event: DragEvent) {
    event.preventDefault();
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
