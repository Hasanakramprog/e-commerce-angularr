import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class CartsService {

  constructor(private http:HttpClient) { }
  orderNow(data:any){

      // return this.http.get("https://dummyjson.com/products/"+data)
      return this.http.post("https://hasanalaa.pythonanywhere.com/api/products/order/",data)

  }
}

