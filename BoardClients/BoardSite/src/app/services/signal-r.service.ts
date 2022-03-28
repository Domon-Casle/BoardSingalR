import { Injectable } from '@angular/core';
import * as signalR from "@microsoft/signalr";
import { Subject } from 'rxjs';
import { Status } from '../board/enums/status';
import { Epic } from '../board/modals/epic';

export interface EpicUpdate {
  epic: Epic,
  status: Status
}

@Injectable({
  providedIn: 'root'
})
export class SignalRService {

  private hubConnection: signalR.HubConnection;

  public connectionId: string = "";
  public epicChanged: Subject<EpicUpdate> = new Subject<EpicUpdate>();
  public epicsChanged: Subject<Epic[]> = new Subject<Epic[]>();

  constructor() {
    this.hubConnection = new signalR.HubConnectionBuilder()
      .withUrl('http://localhost:50543/docHub')
      .withAutomaticReconnect()
      .build();
  }

  public startConnection = () => {
    this.hubConnection.start().then(() => {
      console.log('Connection Started');
      this.getConnectionId();
    }).catch((err: Error) => console.log(err.message));
  }

  public addDocChangeListener = () => {
    this.hubConnection.on('UpdateEpic', (data: Epic, oldStatus: Status) => {
      this.epicChanged.next({
        epic: data,
        status: oldStatus
      });
    });

    this.hubConnection.on('UpdatedEpics', (data: Epic[]) => {
      this.epicsChanged.next(data);
    });
    // this.hubConnection.onreconnected
    // this.hubConnection.onreconnecting
  }

  public updateEpic(epic: Epic, oldStatus: number) {
    this.hubConnection.invoke('UpdateEpic', epic, oldStatus);
  }

  public getConnectionId(){
    this.hubConnection.invoke('getConnectionId').then((connectionId) => {
      this.connectionId = connectionId;
    });
  }
}
