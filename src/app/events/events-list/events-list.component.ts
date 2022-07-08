import {Component, OnInit} from '@angular/core';
import {EventService} from "../../shared";
import {IEvent} from "../../models/IEvent";

@Component({
  selector: 'app-events-list',
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.scss']
})
export class EventsListComponent implements OnInit {
  events!: IEvent[];

  constructor(private eventService: EventService) {

  }

  ngOnInit(): void {
    this.eventService.getEvents().subscribe({
      next: value => this.events = value,
      error: err => console.log(err)
    })
  }

  handleEventClick() {

  }
}
