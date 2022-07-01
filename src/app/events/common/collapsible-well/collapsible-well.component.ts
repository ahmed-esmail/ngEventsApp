import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-collapsible-well',
  templateUrl: './collapsible-well.component.html',
  styleUrls: ['./collapsible-well.component.scss']
})
export class CollapsibleWellComponent implements OnInit {
  ShowContent: boolean = true;
  constructor() { }

  ngOnInit(): void {
  }

}
