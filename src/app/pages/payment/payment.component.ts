
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {
  title = "Payment"
  grandTotal!: number
  ParentMessage:string="obey parent";
  constructor(private cart: CartService, private router: Router, private http: HttpClient) { }
  ngOnInit(): void {
    this.cart.getProducts().subscribe(res => {
      this.grandTotal = this.cart.getPrice();
      console.log(res)
    })
  }

  fname = ""
  lname = ""
  Addr!: string
  phone = ""
  country = "India"
  upi=""


  paytm = ""
  bhim = ""
  cash =""
  method = ""
  selected = ""
  disableBtn = true
  onClick() {
    this.selected = this.method
  }
  pay() {
    this.router.navigate(['/success'])
  }
  details: any = []
  continue() {
    if (this.fname != "" && this.lname != "" && this.Addr != "" && this.phone!= ""&& this.upi!="")  {
      this.disableBtn = false
    }
    const details = {
      fname: this.fname,
      lname: this.lname,
      Addr: this.Addr,
      phone: this.phone,
      grandTotal:this.grandTotal
    };
    this.http.post(`http://localhost:9000/bill`, details).subscribe(
      response => {
        console.log('Success:', response);
        this.ngOnInit()
      },
      error => {
        console.error('Error adding:', error);
      }
    );

  }
}

