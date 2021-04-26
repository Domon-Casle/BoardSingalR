import { Component, OnInit } from '@angular/core';
import { DragService } from '../services/drag.service';
import { EpicsService } from '../services/epics.service';
import { EpicUpdate, SignalRService } from '../services/signal-r.service';
import { Status } from './enums/status';
import { Epic } from './modals/epic';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {

  public todo: Epic[] = [];
  public todoStatus: Status = Status.Todo;
  
  public inProgress: Epic[] = [];
  public inProgressStatus: Status = Status.InProgress;
  
  public done: Epic[] = [];
  public doneStatus: Status = Status.Done;
  
  public loading: boolean = true;

  constructor(
    private epicsService: EpicsService,
    private dragService: DragService,
    private signalRService: SignalRService
  ) { 
  }

  async ngOnInit(): Promise<void> {
    this.loading = true;
    const epics = await this.epicsService.getAll();

    this.todo = epics.filter(e => e.status === Status.Todo);
    this.inProgress = epics.filter(e => e.status === Status.InProgress);
    this.done = epics.filter(e => e.status === Status.Done);

    this.signalRService.epicChanged.subscribe((data: EpicUpdate) => {
      switch(data.status) {
        case Status.Todo:          
          this.todo.splice(this.todo.findIndex(e => e.id === data.epic.id), 1);
          break;

        case Status.InProgress:
          this.inProgress.splice(this.inProgress.findIndex(e => e.id === data.epic.id), 1);
          break;

        case Status.Done:
          this.done.splice(this.done.findIndex(e => e.id === data.epic.id), 1);
          break;
      }

      switch(data.epic.status) {
        case Status.Todo:          
          this.todo.push(data.epic);
          break;

        case Status.InProgress:
          this.inProgress.push(data.epic);
          break;

        case Status.Done:
          this.done.push(data.epic);
          break;
      }
    });
    this.loading = false;
  }

  public drop(event: DragEvent, stop: Status) {
    event.preventDefault();
    console.log('drop column');
    this.handleDrop(stop);
  }

  public allowDrop(event: DragEvent, endStatus: Status) {
    if ((this.dragService.getDragItem() as Epic).status !== endStatus) {
      event.preventDefault();
    }
  }

  public handleDrop(endStatus: Status) {
    let index: number = 0;

    const draggedItem: Epic = this.dragService.getDragItem() as Epic;
    const oldStatus: Status = draggedItem.status;
    switch(oldStatus) {
      case Status.Todo:
        index = this.todo.indexOf(draggedItem);
        this.todo.splice(index, 1);
        break;

      case Status.InProgress:
        index = this.inProgress.indexOf(draggedItem);
        this.inProgress.splice(index, 1);
        break;

      case Status.Done:
        index = this.done.indexOf(draggedItem);
        this.done.splice(index, 1);
        break;
    }

    switch(endStatus) {
      case Status.Todo:
        draggedItem.status = Status.Todo;
        this.todo.push(draggedItem);
        break;

      case Status.InProgress:
        draggedItem.status = Status.InProgress;
        this.inProgress.push(draggedItem);
        break;

      case Status.Done:
        draggedItem.status = Status.Done;
        this.done.push(draggedItem);
        break;
    }

    this.signalRService.updateEpic(draggedItem, oldStatus);
  }
}
