import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Geocode, Record } from '@app/interfaces/list-items';

@Component({
  selector: 'app-apartment-list-item',
  templateUrl: './apartment-list-item.component.html',
  styleUrls: ['./apartment-list-item.component.scss']
})
export class ApartmentListItemComponent {
  @Output() select: EventEmitter<Geocode> = new EventEmitter();
  @Input() record!: Record;

  onSelect() {
    this.select.emit(this.record.geocode);
  }
}
