import { NgModule } from '@angular/core';
import { DwTableComponent } from './meta/dw-table/dw-table.component';
import { SharedModule } from '../shared/shared.module';
import { DwInfoModelComponent } from './meta/dw-info-model/dw-info-model.component';
import { DwSearchComponent } from './meta/dw-search/dw-search.component';
import { DwDatePickerComponent } from './meta/dw-date-picker/dw-date-picker.component';
const COMPONENTS = [
  DwTableComponent,
  DwInfoModelComponent,
  DwSearchComponent,
  DwDatePickerComponent
];
@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [
    ...COMPONENTS
  ],
  exports: [
    ...COMPONENTS
  ]
})
export class CoreModule { }
