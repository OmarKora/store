import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {
  @Input() x: any
  @Output() selected = new EventEmitter()
  addButton: boolean = false
  quantity: number = 0
  Add() {
    this.selected.emit({ item: this.x, quantity:this.quantity})
  }

}
