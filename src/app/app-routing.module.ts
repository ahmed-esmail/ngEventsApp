import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {EventsListComponent} from "./events/events-list/events-list.component";
import {EventDetailsComponent} from "./events/event-details/event-details.component";
import {CreateEventComponent} from "./events/create-event/create-event.component";
import {NotfoundErrorComponent} from "./error/notfound-error/notfound-error.component";
import {EventRouteActivatorGuard} from "./events/event-details/event-route-activator.guard";

const routes: Routes = [
  {path: "events/create", component: CreateEventComponent},
  {path: "events", component: EventsListComponent},
  {path: "events/:id", component: EventDetailsComponent, canActivate: [EventRouteActivatorGuard]},
  {path: "404", component: NotfoundErrorComponent},
  {path: "", redirectTo: "/events", pathMatch: "full"},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
