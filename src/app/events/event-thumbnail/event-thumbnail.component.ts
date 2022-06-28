import {Component, Input, OnInit} from '@angular/core';
import {IEvent} from "../../models/IEvent";

@Component({
  selector: 'app-event-thumbnail',
  templateUrl: './event-thumbnail.component.html',
  styleUrls: ['./event-thumbnail.component.scss'],
})
export class EventThumbnailComponent implements OnInit {
  @Input() event: IEvent | undefined;

  constructor() {
  }

  ngOnInit(): void {
  }

}
