import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DragService {

  private dragItem: any;

  constructor() { }

  setDragItem(item: any) {
    this.dragItem = item;
  }

  getDragItem() {
    return this.dragItem;
  }
}
