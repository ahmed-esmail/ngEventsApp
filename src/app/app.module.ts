import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';

const toastr: Toastr = window['toastr'];
const jQuery = window['$'];

import {
  EventsListComponent,
  EventThumbnailComponent,
  EventRouteActivatorGuard,
  CreateEventComponent,
  EventService,
  EventDetailsComponent,
  CreateSessionComponent,
} from './events';

import {NavComponent} from './nav/nav.component';
import {Toastr, TOSTER_TOKEN, JQuery_Token, ModalTriggerDirective} from "./common";
import {NotfoundErrorComponent} from './error/notfound-error/notfound-error.component';
import {CheckDirtyState} from "./events/create-event/CheckDirtyState";
import {AuthService} from "./user/auth.service";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { SessionListComponent } from './events/event-details/session-list/session-list.component';
import { CollapsibleWellComponent } from './events/common/collapsible-well/collapsible-well.component';
import { DurationPipe } from './events/common/duration.pipe';
import { SimpleModalComponent } from './common/simple-modal/simple-modal.component';

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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    EventService,
    {provide: TOSTER_TOKEN, useValue: toastr},
    {provide: JQuery_Token, useValue: jQuery},
    EventRouteActivatorGuard,
    AuthService,
    {provide: "canDeactivateCreateEvent", useValue: CheckDirtyState}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
