import { Component, OnInit } from '@angular/core';
import {events as eventList} from "../EventsList";

@Component({
  selector: 'app-events-list',
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.scss']
})
export class EventsListComponent implements OnInit {
  events: any;

  constructor() {
    this.events = eventList;
  }


  ngOnInit(): void {
  }

}
