import { Component, Input } from '@angular/core';
import { Pilot } from '../../../../interfaces/pilot';

@Component({
  selector: 'app-pilots',
  templateUrl: './pilots.component.html',
  styleUrls: ['./pilots.component.scss']
})
export class PilotsComponent {
  @Input() pilots!: Pilot[]
}
