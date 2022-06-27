import { Injectable } from '@angular/core';
import {EVENTS} from "./Data";

@Injectable({
  providedIn: 'root'
})
export class EventService {
  getEvents() {
    return EVENTS;
  }

  getEvent(id: number) {
    return EVENTS.find(event => event.id === id);
  }
}
