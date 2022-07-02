import {Directive, ElementRef, Inject, OnInit} from '@angular/core';
import {JQuery_Token} from "./jQuery.service";

@Directive({
  selector: '[appModalTrigger]'
})
export class ModalTriggerDirective implements OnInit{
  private el: HTMLElement;

  constructor(@Inject(JQuery_Token) public $: any, ref: ElementRef) {
    this.el = ref.nativeElement;
  }

  ngOnInit(): void {
    this.el.addEventListener('click', e => {
      // console.log(this.$('#simple-modal'))
      this.$('#simple-modal').modal("show");
    });
  }

}
