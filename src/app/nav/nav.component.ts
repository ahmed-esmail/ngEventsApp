import {Component, OnInit} from '@angular/core';
import {AuthService} from "../user/auth.service";
import {IUser} from "../models/IUser";

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  constructor(public authService: AuthService) {
  }


  ngOnInit(): void {
  }

}
