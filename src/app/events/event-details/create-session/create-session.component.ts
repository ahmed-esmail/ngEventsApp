import {Component, EventEmitter, Inject, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ISession} from "../../../models/ISession";
import {Toastr, TOSTER_TOKEN} from "../../../common/toastr.service";

@Component({
  selector: 'app-create-session',
  templateUrl: './create-session.component.html',
  styleUrls: ['./create-session.component.scss']
})
export class CreateSessionComponent implements OnInit {
  newSessionForm!: FormGroup
  name!: FormControl
  presenter!: FormControl
  duration!: FormControl
  level!: FormControl
  abstract!: FormControl

  @Output() saveNewSession = new EventEmitter()
  @Output() cancelAddSession = new EventEmitter()

  ngOnInit() {
    this.name = new FormControl('', Validators.required)
    this.presenter = new FormControl('', Validators.required)
    this.duration = new FormControl('', Validators.required)
    this.level = new FormControl('', Validators.required)
    this.abstract = new FormControl('', [Validators.required,
      Validators.maxLength(400)])

    this.newSessionForm = new FormGroup({
      name: this.name,
      presenter: this.presenter,
      duration: this.duration,
      level: this.level,
      abstract: this.abstract
    })
  }

  constructor(@Inject(TOSTER_TOKEN) private toastr: Toastr) {
  }


  saveSession(formValues) {
    if (this.newSessionForm.valid) {
      let session: ISession = {
        id: undefined,
        name: formValues.name,
        duration: +formValues.duration,
        level: formValues.level,
        presenter: formValues.presenter,
        abstract: formValues.abstract,
        voters: []
      }
      this.saveNewSession.emit(session)
    } else {
      this.toastr.success('Please fill in the form correctly')
    }

  }

  cancel() {
    this.cancelAddSession.emit()
  }
}
