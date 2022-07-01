import {Component, Input, OnChanges, SimpleChanges} from '@angular/core';
import {ISession} from "../../../models/ISession";

@Component({
  selector: 'app-session-list',
  templateUrl: './session-list.component.html',
  styleUrls: ['./session-list.component.scss']
})
export class SessionListComponent implements OnChanges {

  @Input() sessions: ISession[] | [] = [];
  @Input() filterBy: string = 'all'
  private visibleSessions: ISession[] | [] = [];

  constructor() { }


  addSession(session: ISession) {

  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.sessions){
      this.filterSessions(this.filterBy)
    }
  }

  private filterSessions(filterBy: string) {
    if (filterBy === 'all') {
      this.visibleSessions = this.sessions?.slice(0)
    }
  }
}
