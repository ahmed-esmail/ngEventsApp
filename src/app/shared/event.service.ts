import { EventEmitter, Injectable } from '@angular/core';
import { EVENTS } from '../events/Data';
import { IEvent } from '../models/IEvent';
import { ISession } from '../models/ISession';
import {catchError, Observable, of, tap, throwError} from "rxjs";
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable({
  providedIn: 'root',
})
export class EventService {

  constructor(private http: HttpClient) {
  }

  getEvents(): Observable<IEvent[]> {
    return this.http.get<IEvent[]>("/api/events").pipe(
      tap(date => console.log("Get All Events",date)),
      catchError(this.errorHandler)
    )
  }


  getEvent(id: number): Observable<IEvent> {
    return this.http.get<IEvent>(`/api/events/${id}`).pipe(
      tap(date => console.log("Get Event",date)),
      catchError(this.errorHandler)
    )
  }

  saveEvent(event):Observable<IEvent> {
    let options = {headers: new HttpHeaders({'Content-type': 'application/json'})}
    return this.http.post<IEvent>('/api/events', event, options).pipe(
      tap(date => console.log("save Event", event)),
      catchError(this.errorHandler)
    )
  }


  searchSessions(searchTerm: string):Observable<ISession[]> {
    return this.http.get<ISession[]>(`/api/sessions/search?search=${searchTerm}`).pipe(
      tap(date => console.log(date)),
      catchError(this.errorHandler)
    )
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
