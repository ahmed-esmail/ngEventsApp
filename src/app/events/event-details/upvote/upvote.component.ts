import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-upvote',
  templateUrl: './upvote.component.html',
  styleUrls: ['./upvote.component.scss']
})
export class UpvoteComponent implements OnInit {
  @Input() count!:number;
  iconColor!: string
  @Input() set voted(val: boolean){
    this.iconColor = val ?'red': 'white'
  };
  @Output() vote = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onClick(){
    this.vote.emit({})
  }

}
