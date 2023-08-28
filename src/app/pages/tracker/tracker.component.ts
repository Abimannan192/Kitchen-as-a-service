import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';
import { BillDetailsService } from 'src/app/services/bill-details.service';
@Component({
  selector: 'app-tracker',
  templateUrl: './tracker.component.html',
  styleUrls: ['./tracker.component.scss']
})
export class TrackerComponent implements OnInit {
  currentDate: Date = new Date();
  title = "Payment"
  orderID: number | undefined;

  grandTotal!: number

  constructor(private cart: CartService, private router: Router,private service:BillDetailsService) {
    this.generateOrderID();
  }
  billData:any=[]

  ngOnInit(): void {
    this.cart.getProducts().subscribe(res => {
      this.grandTotal = this.cart.getPrice();
      console.log(res)
    })
    this.service.getData().subscribe((data) => {
      this.billData = data;
      console.log(this.billData)
    })
  }
  generateOrderID() {
    this.orderID = Math.floor(Math.random() * (999999999 - 100000000 + 1) + 1000000000);
  }
}