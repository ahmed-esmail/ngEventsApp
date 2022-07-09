import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {EventService} from "../../shared";
import {IEvent} from "../../models/IEvent";

@Component({
  selector: 'app-event-edit',
  templateUrl: './event-edit.component.html',
  styleUrls: ['./event-edit.component.scss']
})
export class EventEditComponent implements OnInit {

  editEvent: any
  isDirty:boolean = true
  constructor(private router: Router,
              private eventService:EventService,
              private route: ActivatedRoute) {}

  saveEvent(formValues) {
    if (formValues.isValid) {
      this.eventService.saveEvent(formValues).subscribe(()=> {
        this.isDirty = false
        this.router.navigate(['/events'])
      })
    }
  }

  cancel() {
    this.router.navigate(['/events'])
  }

  ngOnInit(): void {
    this.eventService.getEvent(this.route.snapshot.params["id"]).subscribe({
      next: value => this.editEvent = value
    })
  }

}
