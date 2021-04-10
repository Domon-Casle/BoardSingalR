import { Component, OnInit } from '@angular/core';
import { EpicsService } from '../services/epics.service';
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
    private epicsService: EpicsService
  ) { 
  }

  async ngOnInit(): Promise<void> {
    this.loading = true;
    const epics = await this.epicsService.getAll();

    this.todo = epics.filter(e => e.status === Status.Todo);
    this.inProgress = epics.filter(e => e.status === Status.InProgress);
    this.done = epics.filter(e => e.status === Status.Done);
    this.loading = false;
  }

}
