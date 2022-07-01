import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';

declare let toastr: Toastr;

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
import {Toastr, TOSTER_TOKEN} from "./common/toastr.service";
import {NotfoundErrorComponent} from './error/notfound-error/notfound-error.component';
import {CheckDirtyState} from "./events/create-event/CheckDirtyState";
import {AuthService} from "./user/auth.service";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { SessionListComponent } from './events/event-details/session-list/session-list.component';
import { CollapsibleWellComponent } from './events/common/collapsible-well/collapsible-well.component';
import { DurationPipe } from './events/common/duration.pipe';

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
    EventRouteActivatorGuard,
    AuthService,
    {provide: "canDeactivateCreateEvent", useValue: CheckDirtyState}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
