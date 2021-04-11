import { Component, OnInit } from '@angular/core';
import { SignalRService } from './services/signal-r.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'BoardSite';
  constructor(private signalRService: SignalRService) {
  }

  ngOnInit() {
    this.signalRService.startConnection();
    this.signalRService.addDocChangeListener();
  }
}
