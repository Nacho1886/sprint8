import { NgModule } from '@angular/core';

import {AccordionModule} from 'primeng/accordion';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { SpeedDialModule } from 'primeng/speeddial';
import { SplitButtonModule } from 'primeng/splitbutton';
import { ToolbarModule } from 'primeng/toolbar';



@NgModule({
  exports: [
    AccordionModule,
    ButtonModule,
    CardModule,
    SpeedDialModule,
    SplitButtonModule,
    ToolbarModule,
    
  ]
})
export class NgprimeModule { }
