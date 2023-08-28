
import { Component } from '@angular/core';
import { FoodDetailsService } from 'src/app/services/food-details.service';

@Component({
  selector: 'app-items',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {
  constructor(private service: FoodDetailsService) { }
  foodData: any = []

  ngOnInit(): void {
    this.service.getFood().subscribe((data) => {

      this.foodData = data;

      console.log(this.foodData)

    })
  }

  currentPage = 1;
  pageSize = 6;

  get pagedFoodData(): any[] {
    const startIndex = (this.currentPage - 1) * this.pageSize;
    const endIndex = startIndex + this.pageSize;
    return this.foodData.slice(startIndex, endIndex);
  }

  get totalPages(): number {
    return Math.ceil(this.foodData.length / this.pageSize);
  }

  get pages(): number[] {
    const pageCount = this.totalPages;
    const pages = [];

    for (let i = 1; i <= pageCount; i++) {
      pages.push(i);
    }

    return pages;
  }

  changePage(page: number): void {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
    }
    window.scrollTo(0, 0);
  }
}

