import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class BillDetailsService {
  datas: [] = []
  constructor(private http: HttpClient) { }
  getData() {
    return this.http.get('http://localhost:9000/getBillDetails').pipe(map((res: any) => {
      this.datas = res
      console.log(this.datas)
      return res;
    }))
  }
}
