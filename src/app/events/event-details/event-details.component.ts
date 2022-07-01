import {Component, OnInit} from '@angular/core';
import {EventService} from "../../shared";
import {ActivatedRoute} from "@angular/router";
import {IEvent} from "../../models/IEvent";
import {ISession} from "../../models/ISession";

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.scss']
})
export class EventDetailsComponent implements OnInit {
  event!: IEvent;
  addMode: boolean = false;
  filterBy: string = 'all';

  constructor(private eventService: EventService, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    let id: number = +this.route.snapshot.params['id'];
    this.event = this.eventService.getEvent(id);
  }

  addSessionToEvent(session: ISession) {
    // @ts-ignore
    const nextId = Math.max.apply(null, this.event.sessions.map(s => s.id));
    session.id = nextId + 1
    this.event.sessions.push(session)
    this.eventService.updateEvent(this.event)
    this.addMode = false
  }
}
