import { Directive, OnInit, ElementRef } from '@angular/core';

@Directive({
  selector: `ion-radio-group`
})
export class IonRadioGroupDirective implements OnInit {

  constructor(private el: ElementRef) {}

  ngOnInit() {
    this.el.nativeElement.setAttribute('custom-palette', true);
    this.el.nativeElement.setAttribute('custom-palette-style', 'static-label');
  }

}
