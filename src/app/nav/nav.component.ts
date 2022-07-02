import {Component, OnInit} from '@angular/core';
import {AuthService} from "../user/auth.service";
import {IUser} from "../models/IUser";
import {ISession} from "../models/ISession";
import {EventService} from "../shared";

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  searchTerm: string = '';
  foundSessions!: ISession[];

  constructor(public authService: AuthService, private eventService: EventService) {
  }

  ngOnInit(): void {
  }

  searchSessions(searchTerm: string) {
    this.eventService.searchSessions(searchTerm).subscribe({
      next: sessions => {
        this.foundSessions = sessions
        console.log(this.foundSessions)
      }
    });
  }
}
