import { Component, OnInit, TemplateRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';
import { FoodDetailsService } from 'src/app/services/food-details.service';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-menupage',
  templateUrl: './menupage.component.html',
  styleUrls: ['./menupage.component.scss']
})
export class MenupageComponent implements OnInit {

  constructor(private param: ActivatedRoute, private service: FoodDetailsService, private cart: CartService, private dialog: MatDialog) { }
  getMenuId: any;
  menuData: any;

  ngOnInit(): void {
    this.getMenuId = this.param.snapshot.paramMap.get('id');
    if (this.getMenuId) {
      this.menuData = this.service.dishes.filter((value) => {
        return value['id'] == this.getMenuId;
      });
    }
  }

  addtoCart(item: any, templateRef: TemplateRef<any>) {
    this.dialog.open(templateRef);
    this.cart.addtoCart(item)
    console.log(item)
  }

}
