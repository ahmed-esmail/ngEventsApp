import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-thumbnail',
  templateUrl: './event-thumbnail.component.html',
  styleUrls: ['./event-thumbnail.component.scss'],
})
export class EventThumbnailComponent implements OnInit {
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
