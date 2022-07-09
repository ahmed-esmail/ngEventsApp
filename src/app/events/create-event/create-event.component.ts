import { Component } from '@angular/core'
import { Router } from '@angular/router'
import { EventService } from '../../shared'

@Component({
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.scss']
})
export class CreateEventComponent {
  newEvent: any
  isDirty:boolean = true
  constructor(private router: Router, private eventService:EventService) {}

  saveEvent(formValues) {
      this.eventService.saveEvent(formValues).subscribe(()=>{
        this.isDirty = false
        this.router.navigate(['/events'])
        console.log("Saved")
      })
  }

  cancel() {
    this.router.navigate(['/events'])
  }
}
