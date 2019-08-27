import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: `ion-content`
})
export class IonContentDirective implements OnInit {

  constructor(private el: ElementRef) {}

  ngOnInit() {
    this.el.nativeElement.setAttribute('custom-palette', true);
  }

}
