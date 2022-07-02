import {Component, ElementRef, Inject, Input, OnInit, ViewChild} from '@angular/core';
import {JQuery_Token} from "../jQuery.service";

@Component({
  selector: 'app-simple-modal',
  templateUrl: './simple-modal.component.html',
  styleUrls: ['./simple-modal.component.scss']
})
export class SimpleModalComponent implements OnInit {
  @Input() title!: string;
  @Input() elementId!: string;
  @Input() closeOnBodyClick!: string;
  @ViewChild('modalcontainer') modalContainer!: ElementRef;

  constructor(@Inject(JQuery_Token) private $:any) {
  }

  ngOnInit(): void {}

  closeModal() {
    this.$(this.modalContainer.nativeElement).modal('hide');
  }
}
