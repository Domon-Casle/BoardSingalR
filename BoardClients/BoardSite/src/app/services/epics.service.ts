import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Epic } from '../board/modals/epic';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root'
})
export class EpicsService extends BaseService  {

  constructor(
    private http: HttpClient
  ) {
    super("epics");
  }

  public getAll(): Promise<Epic[]> {    
    const url = this.buildUrl('getall');
    return this.http.get<Epic[]>(url).toPromise();
  }

  public update(epic: Epic, oldStatus: number, connectionId: string): Promise<Epic[]> {
    let url = this.buildUrl('');
    let body = {
      epic: epic,
      oldStatus: oldStatus,
      connectionId: connectionId
    };
    return this.http.put<Epic[]>(url, body).toPromise();
  }
}
