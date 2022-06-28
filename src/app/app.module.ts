import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {EventsListComponent} from './events/events-list/events-list.component';
import {EventThumbnailComponent} from './events/event-thumbnail/event-thumbnail.component';
import {NavComponent} from './nav/nav.component';
import {EventService} from "./events/event.service";
import {ToastrService} from "./common/toastr.service";
import {EventDetailsComponent} from './events/event-details/event-details.component';
import {CreateEventComponent} from './events/create-event/create-event.component';
import {NotfoundErrorComponent} from './error/notfound-error/notfound-error.component';
import {EventRouteActivatorGuard} from "./events/event-details/event-route-activator.guard";

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
  providers: [EventService, ToastrService, EventRouteActivatorGuard],
  bootstrap: [AppComponent]
})
export class AppModule {
}
