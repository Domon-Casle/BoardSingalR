import { Component, Input, OnInit } from '@angular/core';
import { Status } from '../enums/status';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() Status: Status = Status.Todo;
  
  constructor() { }

  ngOnInit(): void {
  }

}
