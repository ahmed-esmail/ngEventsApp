import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {
  EventsListComponent,
  EventDetailsComponent,
  CreateEventComponent,
  CreateSessionComponent, EventResolver
} from "./events";
import {NotfoundErrorComponent} from "./error/notfound-error/notfound-error.component";
import {AuthGuard} from "./user/auth.guard";


const routes: Routes = [
  {path: "user", loadChildren: () => import("./user/user.module").then(m => m.UserModule) },
  {path: "events/create", component: CreateEventComponent , canDeactivate: ["canDeactivateCreateEvent"]},
  {path: "events", component: EventsListComponent},
  {path: "events/:id", component: EventDetailsComponent, resolve: {event: EventResolver}},
  {path: "events/session/create", component: CreateSessionComponent},
  {path: "404", component: NotfoundErrorComponent},
  {path: "", redirectTo: "/events", pathMatch: "full"},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
