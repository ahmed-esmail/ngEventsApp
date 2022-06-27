import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.scss'],
})
export class EventDetailsComponent implements OnInit {
  @Input() event: any;

  constructor() {}

  ngOnInit(): void {}

  changeColor() {
    let isColored = false;
    if (this.event.price === 800) {
      isColored = true;
    }

    return { yellow: isColored, bold: isColored };
  }
}
