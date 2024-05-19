import { Component, OnInit, inject } from '@angular/core';
import { CardService } from '../../services/card.service';
import { Card, sendProduct } from '../../models/card';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  private _CardService = inject(CardService)

  ngOnInit(): void {
    this.getData()
    this.getTotal()
  }



  card: any[] = []
  total: number = 0
  orderSuccess: boolean = false



  // get Data
  getData() {
    if (localStorage.getItem('shopping')) {
      this.card = JSON.parse(localStorage.getItem('shopping')!)
      console.log(this.card);
    }
  }

  // clear
  clear() {
    this.card = []
    this.getTotal()
    localStorage.setItem('shopping', JSON.stringify(this.card))
  }

  // plus
  plus(i: number) {
    this.card[i].quantity++
    localStorage.setItem('shopping', JSON.stringify(this.card))
    this.getTotal()
  }
  // mins
  mins(i: number) {
    this.card[i].quantity--
    localStorage.setItem('shopping', JSON.stringify(this.card))
    this.getTotal()
  }

  // input
  inputVal(i: number, value: number) {
    this.card[i].quantity = value
    this.getTotal()
    localStorage.setItem('shopping', JSON.stringify(this.card))
  }

  // delete
  delete(i: number) {
    this.card.splice(i, 1)
    localStorage.setItem('shopping', JSON.stringify(this.card))
    this.getTotal()
  }

  // get Total
  getTotal() {
    this.total = 0
    for (let i = 0; i < this.card.length; i++) {
      this.total += this.card[i].item.price * this.card[i].quantity
    }
  }

  // button order
  order() {
    // proplem sned product interface
    let product: any = this.card.map(x => ({
      
        productId: x.item.id,
        quantity: x.quantity
      

    }))
    console.log(product);

    let model: Card = {
      userId: 5,
      date: new Date(),
      products: product
    }
    console.log(model);

    this.getOrderCard(model)
  }

  getOrderCard(data: Card) {
    this._CardService.orderCard(data).subscribe({
      next: (res) => {
        console.log(res);
        this.orderSuccess = true
      },
      error: (err) => { console.log(err); }
    })
  }


}
