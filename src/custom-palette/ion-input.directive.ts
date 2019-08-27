import { Directive, ElementRef, AfterViewChecked } from '@angular/core';

@Directive({
  selector: `ion-input`
})
export class IonInputDirective implements AfterViewChecked {

  private input;

  constructor(
    private el: ElementRef
  ) {}

  ngAfterViewChecked() {
    if (!this.input) {
      this.input = this.el.nativeElement.querySelector('input');
      if (this.input) {
        this.input.addEventListener('focus', () => {});
      }
    }
  }

}
