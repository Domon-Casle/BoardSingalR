import { Injectable } from '@angular/core';
import * as signalR from "@microsoft/signalr";
@Injectable({
  providedIn: 'root'
})
export class SignalRService {

  private _data: any;

  private hubConnection: signalR.HubConnection;

  public startConnection = () => {
    this.hubConnection = new signalR.HubConnectionBuilder()
                                    .withUrl('https://localhost:44362/docHub')
                                    .build();
                                    
    this.hubConnection.start().then(() => {
      console.log('Connection Started');
    }).catch((err: Error) => console.log(err.message));
  }

  public addDocChangeListener = () => {
    this.hubConnection.on('ReceiveMessage', (data) => {
      this._data = data;
      console.log(data);
    });
  };
}
