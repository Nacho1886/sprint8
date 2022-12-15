import { NgModule } from '@angular/core';

import { ButtonModule } from 'primeng/button';
import { SpeedDialModule } from 'primeng/speeddial';
import { SplitButtonModule } from 'primeng/splitbutton';
import { ToolbarModule } from 'primeng/toolbar';



@NgModule({
  exports: [
    ButtonModule,
    SpeedDialModule,
    SplitButtonModule,
    ToolbarModule,
    
  ]
})
export class NgprimeModule { }
