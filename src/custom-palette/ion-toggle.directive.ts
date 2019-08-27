import { Directive, OnInit, ElementRef, Input, OnChanges } from '@angular/core';

@Directive({
  selector: `ion-toggle[custom-palette-toggle][mode='ios']`
})
export class IonToggleDirective implements OnInit, OnChanges {

  @Input() enabledText = '';
  @Input() disabledText = '';

  constructor(private el: ElementRef) {}

  ngOnInit() {
    this.setShadowStyle();
  }

  ngOnChanges(changes) {
    if (changes && (changes.enabledText || changes.disabledText)) {
      this.setShadowStyle();
    }
  }

  private setShadowStyle() {
    try {
      const shadow = this.el.nativeElement.shadowRoot ||
                     this.el.nativeElement.attachShadow({ mode: 'open' });
      if (shadow) { shadow.innerHTML += `
        <style>
          :host {
            width: 80px !important;
          }
          :host(.toggle-checked) .toggle-inner {
            -webkit-transform: translate3d(48px, 0, 0) !important;
            transform: translate3d(48px, 0, 0) !important;
          }
          :host .toggle-icon:after {
            content: ' ';
            line-height: 33px !important;
            color: white !important;
            text-transform: uppercase !important;
            font-weight: 800 !important;
            font-size: 13px !important;
            width: 50px !important;
            display: inline-block !important;
            text-align: center !important;
          }
          :host(.toggle-checked) .toggle-icon:after {
            content: '${this.enabledText}';
          }
          :host(:not(.toggle-checked)) .toggle-icon:after {
            content: '${this.disabledText}';
            position: absolute !important;
            margin-left: 28px !important;
          }
          :host(:not(.toggle-checked)) .toggle-icon {
            background-color: #919191 !important;
          }
          :host(:not(.toggle-checked)) .toggle-icon:before {
            background: #919191 !important;
          }
        </style>
      `; }
    } catch (e) {}
  }

}
