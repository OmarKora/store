import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class SelectComponent {
  @Input() title!: string
  @Input() dataArray: any[] = []
  @Output() filtered = new EventEmitter()

  // value
  valueFilter(event: any) {
    this.filtered.emit(event)
  }

}
