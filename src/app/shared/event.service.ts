import {EventEmitter, Injectable} from '@angular/core';
import {EVENTS} from "../events/Data";
import {IEvent} from "../models/IEvent";
import {ISession} from "../models/ISession";
import {from} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class EventService {
  getEvents() {
    return EVENTS;
  }

  getEvent(id: number): IEvent {
    return EVENTS.find(event => event.id === id) as IEvent;
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

  searchSessions(searchTerm: string) {
    let term = searchTerm.toLocaleLowerCase();
    let results: ISession[] = [];

    EVENTS.forEach(event => {
      let matchingSessions = event.sessions.filter(session =>
        session.name.toLocaleLowerCase().indexOf(term) > -1);
      matchingSessions = matchingSessions.map((session: any) => {
        session.eventId = event.id;
        return session;
      }
      );
      results = results.concat(matchingSessions);
    })

    let emitter = new EventEmitter(true);
    setTimeout(() => {
      emitter.emit(results);
    }, 100);
    return emitter;
  }
}
