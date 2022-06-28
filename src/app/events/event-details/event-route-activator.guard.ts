import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Observable} from 'rxjs';
import {EventService} from "../../shared/event.service";

@Injectable({
  providedIn: 'root'
})
export class EventRouteActivatorGuard implements CanActivate {
  constructor(private eventsService: EventService, private router: Router) {
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    let eventExists = !!this.eventsService.getEvent(+route.params['id']);
    if (!eventExists)
      return this.router.navigate(['/404']);
    return eventExists;
  }

}
