import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Geocode, Record } from '@app/interfaces/list-items';

@Component({
  selector: 'app-apartment-list',
  templateUrl: './apartment-list.component.html',
  styleUrls: ['./apartment-list.component.scss']
})
export class ApartmentListComponent {
  @Output() select: EventEmitter<Geocode> = new EventEmitter();
  @Input() records: Record[] = [];
}
