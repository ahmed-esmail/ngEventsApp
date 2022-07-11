import { Component, OnInit } from '@angular/core';
import { EventService } from '../../shared';
import { ActivatedRoute } from '@angular/router';
import { IEvent } from '../../models/IEvent';
import { ISession } from '../../models/ISession';

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.scss'],
})
export class EventDetailsComponent implements OnInit {
  event!: IEvent;
  addMode: boolean = false;
  filterBy: string = 'all';
  sortBy: string = 'votes';

  constructor(
    private eventService: EventService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.data.subscribe((data) => {
      this.event = data['event'];
      this.addMode = false;
    });
  }

  addSessionToEvent(session: ISession) {
    const nextId = Math.max.apply(
      null,
      this.event.sessions.map((s) => s.id as number)
    );
    session.id = nextId + 1;
    this.event.sessions.push(session);
    this.eventService.saveEvent(this.event).subscribe();
    this.addMode = false;
  }
}
