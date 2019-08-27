import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: `ion-footer`
})
export class IonFooterDirective implements OnInit {

  constructor(private el: ElementRef) {}

  ngOnInit() {
    this.el.nativeElement.setAttribute('custom-palette', true);
  }

}
