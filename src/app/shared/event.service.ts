import { EventEmitter, Injectable } from '@angular/core';
import { EVENTS } from '../events/Data';
import { IEvent } from '../models/IEvent';
import { ISession } from '../models/ISession';
import {catchError, Observable, of, tap, throwError} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root',
})
export class EventService {

  constructor(private http: HttpClient) {
  }

  getEvents(): Observable<IEvent[]> {
    return this.http.get<IEvent[]>("/api/events").pipe(
      tap(date => console.log(date)),
      catchError(this.errorHandler)
    )
  }


  getEvent(id: number): Observable<IEvent> {
    return this.http.get<IEvent>(`/api/events/${id}`).pipe(
      tap(date => console.log(date)),
      catchError(this.errorHandler)
    )
  }

  saveEvent(event) {
    event.id = 999;
    event.session = [];
    EVENTS.push(event);
  }

  updateEvent(event) {
    let index = EVENTS.findIndex((x) => (x.id = event.id));
    EVENTS[index] = event;
  }

  searchSessions(searchTerm: string) {
    let term = searchTerm.toLocaleLowerCase();
    let results: ISession[] = [];

    EVENTS.forEach((event) => {
      let matchingSessions = event.sessions.filter(
        (session) => session.name.toLocaleLowerCase().indexOf(term) > -1
      );
      matchingSessions = matchingSessions.map((session: any) => {
        session.eventId = event.id;
        return session;
      });
      results = results.concat(matchingSessions);
    });

    let emitter = new EventEmitter(true);
    setTimeout(() => {
      emitter.emit(results);
    }, 100);
    return emitter;
  }

  errorHandler(error: any) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(() => new Error(errorMessage));
  }
}
