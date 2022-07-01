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

  saveEvent(event) {
    event.id = 999
    event.session = []
    EVENTS.push(event)
  }

  updateEvent(event) {
    let index = EVENTS.findIndex(x => x.id = event.id)
    EVENTS[index] = event
  }
}
