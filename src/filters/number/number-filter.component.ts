import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'rg-number-filter',
  styleUrls: ['./number-filter.component.css'],
  templateUrl: 'number-filter.component.html',
})
export class NumberFilterComponent {
  @Input() entity;
  @Output() notify: EventEmitter<Array<Object>> = new EventEmitter<Array<Object>>();

  fromNumber: number;
  toNumber: number;

  getData(): Array<Object> {
    return [
      {
        column: this.entity.name,
        comparator: '>',
        value: this.fromNumber
      },
      {
        column: this.entity.name,
        comparator: '<',
        value: this.toNumber
      }
    ];
  }

  clear(): void {
    delete this.fromNumber;
    delete this.toNumber;

    this.notify.emit(this.getData());
  }

  submit(): void {
    this.notify.emit(this.getData());
  }
}
