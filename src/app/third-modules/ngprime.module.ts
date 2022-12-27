import { NgModule } from '@angular/core';

import { AccordionModule } from 'primeng/accordion';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { DialogModule } from 'primeng/dialog';
import { SplitButtonModule } from 'primeng/splitbutton';



@NgModule({
  exports: [
    AccordionModule,
    ButtonModule,
    CardModule,
    DialogModule,
    SplitButtonModule
  ]
})
export class NgprimeModule { }
