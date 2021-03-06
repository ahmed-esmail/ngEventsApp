import {Component, Input, OnChanges, SimpleChanges} from '@angular/core';
import {ISession} from "../../../models/ISession";
import {AuthService} from "../../../user/auth.service";
import {VoterService} from "../voter.service";
import {filter} from "rxjs";

@Component({
  selector: 'app-session-list',
  templateUrl: './session-list.component.html',
  styleUrls: ['./session-list.component.scss']
})
export class SessionListComponent implements OnChanges {

  @Input() sessions: ISession[] | [] = [];
  @Input() filterBy: string = 'all'
  @Input() sortBy: string = 'votes'
  @Input() eventId!: number
  visibleSessions: ISession[] | [] = [];

  constructor(public auth: AuthService, private voterService: VoterService) {

  }


  ngOnChanges(changes: SimpleChanges): void {
    if (this.sessions) {
      this.filterSessions(this.filterBy)
      this.sortBy === 'name' ? this.visibleSessions.sort(this.sortByNameAsc) : this.visibleSessions.sort(this.sortByVotesDesc)
    }
  }

  private sortByVotesDesc(s1: ISession, s2: ISession) {
    return s2.voters.length - s1.voters.length
  }

  private sortByNameAsc(s1 : ISession, s2 : ISession) {
    return s1.name.localeCompare(s2.name)
  }

  private filterSessions(filterBy: string) {
    if (filterBy === 'all') {
      this.visibleSessions = this.sessions.slice(0)
    } else {
      this.visibleSessions = this.sessions.filter(session => session.level.toLocaleLowerCase() === filterBy)
    }
  }

  toggleVote(session: ISession) {
    if (this.userHasVoted(session)){
      this.voterService.deleteVoter(this.eventId,session, this.auth.currentUser.userName)
    } else {
      this.voterService.addVoter(this.eventId,session, this.auth.currentUser.userName)
    }
    if (this.sortBy === 'votes')
      this.visibleSessions.sort(this.sortByVotesDesc)
  }

  userHasVoted(session: ISession): boolean {
    return this.voterService.userHasVoted(session, this.auth.currentUser.userName)
  }
}
