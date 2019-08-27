import { NgModule } from '@angular/core';
import { IonHeaderDirective } from './ion-header.directive';
import { IonContentDirective } from './ion-content.directive';
import { IonFooterDirective } from './ion-footer.directive';
import { IonItemDirective } from './ion-item.directive';
import { IonInputDirective } from './ion-input.directive';
import { IonTextAreaDirective } from './ion-textarea.directive';
import { IonSelectDirective } from './ion-select.directive';
import { IonDateTimeDirective } from './ion-datetime.directive';
import { IonRadioGroupDirective } from './ion-radio-group.directive';
import { IonToggleDirective } from './ion-toggle.directive';

const DECLARATIONS = [
  IonHeaderDirective,
  IonContentDirective,
  IonFooterDirective,
  IonItemDirective,
  IonInputDirective,
  IonTextAreaDirective,
  IonSelectDirective,
  IonDateTimeDirective,
  IonRadioGroupDirective,
  IonToggleDirective
];

@NgModule({
  declarations: DECLARATIONS,
  exports: DECLARATIONS,
  providers: []
})
export class OkodeNgxCustomPaletteModule {}
