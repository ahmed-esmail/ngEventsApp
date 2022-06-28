import {Component, OnInit} from '@angular/core';
import {EventService} from "../../shared/event.service";
import {ToastrService} from "../../common/toastr.service";
import {IEvent} from "../../models/IEvent";

@Component({
  selector: 'app-events-list',
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.scss']
})
export class EventsListComponent implements OnInit {
  events: IEvent[] | undefined;

  constructor(private eventService: EventService, private toastr: ToastrService) {

  }

  ngOnInit(): void {
    this.events = this.eventService.getEvents();
  }

  handleEventClick() {
    this.toastr.success('Event clicked', 'Success');
  }
}
