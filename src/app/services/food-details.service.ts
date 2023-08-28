import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class FoodDetailsService {
  dishes: [] = []
  constructor(private http: HttpClient) { }
  getFood() {
    return this.http.get('http://localhost:9000/getAll').pipe(map((res: any) => {
      this.dishes = res
      console.log(this.dishes)
      return res;
    }))
  }
}


