import { Component, OnInit } from '@angular/core';
import {EventService} from "../event.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.scss']
})
export class EventDetailsComponent implements OnInit {
  event: any;

  constructor(private eventService: EventService,private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    let id:number = +this.route.snapshot.params['id'];
    this.event = this.eventService.getEvent(id);
  }

}
