import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';

import {
  EventsListComponent,
  EventThumbnailComponent,
  EventRouteActivatorGuard,
  CreateEventComponent,
  EventService,
  EventDetailsComponent
} from './events';

import {NavComponent} from './nav/nav.component';
import {ToastrService} from "./common/toastr.service";
import {NotfoundErrorComponent} from './error/notfound-error/notfound-error.component';
import {CheckDirtyState} from "./events/create-event/CheckDirtyState";
import {AuthService} from "./user/auth.service";

@NgModule({
  declarations: [
    AppComponent,
    EventsListComponent,
    EventThumbnailComponent,
    NavComponent,
    EventDetailsComponent,
    CreateEventComponent,
    NotfoundErrorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    EventService,
    ToastrService,
    EventRouteActivatorGuard,
    AuthService,
    {provide: "canDeactivateCreateEvent", useValue: CheckDirtyState}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
