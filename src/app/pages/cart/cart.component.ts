import { Component, OnInit } from '@angular/core';

import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})

export class CartComponent implements OnInit {
  dish: any = []
  grandTotal!: number
  constructor(private cart: CartService) { }

  ngOnInit(): void {
    this.cart.getProducts().subscribe(res => {
      this.dish = res;
      this.grandTotal = this.cart.getPrice();
      console.log(res)
    })
  }

  deleteItem(item: any) {
    this.cart.deleteItem(item)
    this.grandTotal -= item.foodPrice;
  }
  emptyCart() {
    this.cart.removeAll()
  }
}