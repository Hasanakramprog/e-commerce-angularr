import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class CartsService {

  constructor(private http:HttpClient) { }
  orderNow(data:any){

      // return this.http.get("https://dummyjson.com/products/"+id)
      return this.http.post("http://127.0.0.1:8000/api/products/order/",data)

  }
}

