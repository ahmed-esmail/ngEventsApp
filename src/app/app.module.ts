import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

const toastr: Toastr = window['toastr'];
const jQuery = window['$'];

import {
  EventsListComponent,
  EventThumbnailComponent,
  CreateEventComponent,
  EventService,
  EventDetailsComponent,
  CreateSessionComponent,
  UpvoteComponent,
  LocationValidatorDirective,
  EventResolver
} from './events';

import { NavComponent } from './nav/nav.component';
import {
  Toastr,
  TOSTER_TOKEN,
  JQuery_Token,
  ModalTriggerDirective,
} from './common';
import { NotfoundErrorComponent } from './error/notfound-error/notfound-error.component';
import { CheckDirtyState } from './events/create-event/CheckDirtyState';
import { AuthService } from './user/auth.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SessionListComponent } from './events/event-details/session-list/session-list.component';
import { CollapsibleWellComponent } from './common/collapsible-well/collapsible-well.component';
import { DurationPipe } from './common/duration.pipe';
import { SimpleModalComponent } from './common/simple-modal/simple-modal.component';
import {HttpClientModule} from "@angular/common/http";
import { EventEditComponent } from './events/event-edit/event-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    EventsListComponent,
    EventThumbnailComponent,
    NavComponent,
    EventDetailsComponent,
    CreateEventComponent,
    NotfoundErrorComponent,
    CreateSessionComponent,
    SessionListComponent,
    CollapsibleWellComponent,
    DurationPipe,
    SimpleModalComponent,
    ModalTriggerDirective,
    UpvoteComponent,
    LocationValidatorDirective,
    EventEditComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    EventService,
    { provide: TOSTER_TOKEN, useValue: toastr },
    { provide: JQuery_Token, useValue: jQuery },
    AuthService,
    EventResolver,
    { provide: 'canDeactivateCreateEvent', useValue: CheckDirtyState },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
