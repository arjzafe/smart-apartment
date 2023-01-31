import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-map-controls',
  templateUrl: './map-controls.component.html',
  styleUrls: ['./map-controls.component.scss']
})
export class MapControlsComponent {
  @Output() loadPins: EventEmitter<void> = new EventEmitter();
  @Output() showAllPins: EventEmitter<void> = new EventEmitter();
  @Output() removeAllPins: EventEmitter<void> = new EventEmitter();
}
