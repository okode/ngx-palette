import { Directive, OnInit, ElementRef } from '@angular/core';

@Directive({
  selector: `ion-item`
})
export class IonItemDirective implements OnInit {

  private shadowCss = `
    :host(.ion-focused) .item-native {
      background: transparent !important;
    }
    .item-native {
      border: none !important;
      padding: 0px !important;
      background: transparent !important;
    }
    .item-native .item-inner {
      border: 0px !important;
      padding: 0px !important;
      min-height: 68px !important;
    }
    .item-highlight {
      display: none !important;
    }
  `;

  private floatingLabelSelector = 'ion-input, ion-select, select, ion-textarea, ion-datetime';
  private staticLabelSelector = 'ion-checkbox, ion-toggle';

  constructor(private el: ElementRef) {}

  ngOnInit() {
    const e = this.el.nativeElement;
    const inputFloatingLabel = e.querySelector(this.floatingLabelSelector);
    const inputStaticLabel = e.querySelector(this.staticLabelSelector);
    const label = e.querySelector('ion-label');
    if (label && (inputFloatingLabel || inputStaticLabel)) {
      e.setAttribute('custom-palette', true);
      if (inputFloatingLabel) {
        e.setAttribute('custom-palette-style', 'floating-label');
        e.querySelector('ion-label').setAttribute('position', 'floating');
      } else {
        e.setAttribute('custom-palette-style', 'static-label');
      }
      // has icon?
      if (e.querySelector('ion-icon')) { e.classList.add('item-has-icon'); }
      this.setShadowStyle(this.shadowCss);
    }
  }

  private setShadowStyle(style) {
    try {
      const shadow = this.el.nativeElement.shadowRoot ||
                     this.el.nativeElement.attachShadow({ mode: 'open' });
      if (shadow) { shadow.innerHTML += `<style>${style}</style>`; }
    } catch (e) {}
  }

}
