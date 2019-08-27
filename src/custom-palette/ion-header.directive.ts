import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: `ion-header`
})
export class IonHeaderDirective implements OnInit {

  constructor(private el: ElementRef) {}

  ngOnInit() {
    this.el.nativeElement.setAttribute('custom-palette', true);
  }

}
