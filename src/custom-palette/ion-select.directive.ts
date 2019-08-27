import { Directive, OnInit, ElementRef } from '@angular/core';

@Directive({
  selector: `ion-select`
})
export class IonSelectDirective implements OnInit {

  private shadowCss = `
    .select-icon-inner {
      left: -15px !important;
      margin-top: -4px !important;
      border-top: 8px solid !important;
      border-right: 5px solid transparent !important;
      border-left: 5px solid transparent !important;
      opacity: .5 !important;
    }
    .select-text {
      min-height: 24px !important;
      padding-right: 30px !important;
      margin-bottom: 5px !important;
    }
  `;

  constructor(private el: ElementRef) {}

  ngOnInit() {
    this.setShadowStyle(this.shadowCss);
  }

  private setShadowStyle(style) {
    try {
      const shadow = this.el.nativeElement.shadowRoot ||
                     this.el.nativeElement.attachShadow({ mode: 'open' });
      if (shadow) { shadow.innerHTML += `<style>${style}</style>`; }
    } catch (e) {}
  }

}
