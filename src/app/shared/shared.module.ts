import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { TranslateModule } from '@ngx-translate/core';
import { MaterialModule } from './material.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MaterialModule,

    TranslateModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  exports: [
    MaterialModule,

    TranslateModule,
    ReactiveFormsModule,
    FormsModule,
  ],
})
export class SharedModule {}
