import {Injectable} from '@angular/core';
import {EVENTS} from "../events/Data";
import {IEvent} from "../models/IEvent";

@Injectable({
  providedIn: 'root'
})
export class EventService {
  getEvents() {
    return EVENTS;
  }

  getEvent(id: number): IEvent| undefined {
    return EVENTS.find(event => event.id === id);
  }
}
