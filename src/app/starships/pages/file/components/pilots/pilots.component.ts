import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-pilots',
  templateUrl: './pilots.component.html',
  styleUrls: ['./pilots.component.scss']
})
export class PilotsComponent {
  @Input() pilots!: string[]
}
