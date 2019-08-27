import { Directive, ElementRef, OnInit, Output, EventEmitter, Input, OnChanges } from '@angular/core';
import { KdDatepickerCssStyle } from './kd-datepicker.style';
import './kd-datepicker.lib';

declare const WindowDatePicker;

@Directive({
  selector: '[kdDatepicker]'
})
export class KdDatepickerDirective implements OnInit, OnChanges {

  private picker;
  private container;
  private parentContainer;
  @Input() date;
  @Output() dateChange = new EventEmitter();
  @Input() maxDate: string;
  @Input() minDate: string;

  constructor(private elem: ElementRef) {}

  ngOnInit() {
    this.setCssStyle();
    this.createPickerContainer();
    this.initPicker();
  }

  ngOnChanges() {
    if (this.picker && this.date) {
      this.picker.set(new Date(this.date));
    }
    if (this.picker) {
      this.initPicker();
    }
  }

  private initPicker() {
    const lang = this.detectLanguage();
    this.picker = new WindowDatePicker({
      el: this.container,
      toggleEl: this.elem.nativeElement,
      type: 'DATE',
      lang: lang
    });
    this.picker.el.addEventListener('wdp.open', () => this.onPickerViewChange());
    this.picker.el.addEventListener('wdp.close', () => {});
    this.picker.el.addEventListener('wdp.viewchange', () => this.onPickerViewChange());
    this.picker.el.addEventListener('wdp.change', (data) => this.onPickerSelectDate(data));
    window.addEventListener('resize', () => { this.setPosition(); });
  }

  private onPickerSelectDate(data) {
    let date = null;
    const val = this.picker.get();
    if (val.year && val.month && val.day) {
      date = `${val.year}-${('0' + val.month).slice(-2)}-${('0' + val.day).slice(-2)}`;
    }
    this.dateChange.emit(date);
    setTimeout(() => {
      this.picker.close();
      if (document.querySelectorAll('.wdp.wdp-active').length) {
        document.querySelectorAll('.wdp.wdp-active')[0].classList.remove('wdp-active');
      }
    }, 200);
  }

  private onPickerViewChange() {
    const selectedDate = this.date ? new Date(this.date).toISOString().substring(0, 10) : null;
    const today = new Date().toISOString().substring(0, 10);
    document.querySelectorAll('.wdp li[date]').forEach((elem) => {
      const date = elem.getAttribute('date');
      if (date === selectedDate) {
        elem.classList.add('wdp-selected');
      } else if (date === today) {
        elem.classList.add('wdp-today');
      } else if (this.maxDate && new Date(date) > new Date(this.maxDate)) {
        elem.classList.add('wdp-disabled');
      } else if (this.minDate && new Date(date) < new Date(this.minDate)) {
        elem.classList.add('wdp-disabled');
      }
    });
  }

  private createPickerContainer() {
    this.container = document.createElement('div');
    this.container.setAttribute('style', `
      z-index: 9999999 !important;
      position: absolute !important;
    `);
    if (this.elem.nativeElement.closest('ion-item')) {
      this.parentContainer = this.elem.nativeElement.closest('ion-item');
    } else {
      this.parentContainer = this.elem.nativeElement;
    }
    this.parentContainer.insertAdjacentElement('beforebegin', this.container);
    setTimeout(() => { this.setPosition(); }, 200);
  }

  private setPosition() {
    const rect = this.parentContainer.getBoundingClientRect();
    if (rect.left + rect.width > 350) {
      this.container.style.marginLeft = rect.width - 310 + 'px';
    }
    this.container.style.marginTop = rect.height + 'px';
  }

  private setCssStyle() {
    this.elem.nativeElement.style.zIndex = '9999';
    this.elem.nativeElement.style.cursor = 'pointer';
    if (document.getElementById('kdDatepickerStyleTag')) { return; }
    const style = document.createElement('style');
    style.id = 'kdDatepickerStyleTag';
    style.appendChild(document.createTextNode(KdDatepickerCssStyle));
    document.body.appendChild(style);
  }

  private detectLanguage() {
    let lang = window.navigator.language || navigator.language;
    if (lang) { lang = lang.split('-')[0]; }
    switch (lang) {
      case 'es': return 'es';
      case 'ca': return 'ca';
      default:   return 'en';
    }
  }

}
