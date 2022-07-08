import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import {EventService} from "../shared";
import {IEvent} from "../models/IEvent";

@Injectable({
  providedIn: 'root'
})
export class EventResolver implements Resolve<IEvent> {
  constructor(private eventService: EventService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IEvent> {
    return this.eventService.getEvent(route.params['id']);
  }
}
