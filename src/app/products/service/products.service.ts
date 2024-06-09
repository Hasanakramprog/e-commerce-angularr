import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {


  constructor(private http:HttpClient ) { }
  private user = new BehaviorSubject<any>([]);
  castUser = this.user.asObservable();
  getAllProudacts( ){
    return this.http.get("https://dummyjson.com/products?limit=28")
  }
  getProudactsByPrice(low:any,high:any ){
    // return this.http.get("https://hasanalaa.pythonanywhere.com/api/productsByrange/"+low+"/"+high+"/")
    return this.http.get("https://dummyjson.com/products?limit=28")
  }
  getAllCategories( ){
    return this.http.get("https://dummyjson.com/products/categories")
  }
  getProductByCategories( keword:any){
    return this.http.get("https://dummyjson.com/products/category/"+keword)
  }
  SerchProducts( keword:any){
    return this.http.get("https://dummyjson.com/products/search?q="+keword)
  }
  limtProducts( keword:any,skip:any){
    return this.http.get("https://dummyjson.com/products?limit="+keword+"&skip="+skip)
  }
  GetProductById( id:any){
    return this.http.get("https://dummyjson.com/products/"+id)
  }

  // getAllProudacts( ){
  //   // return this.http.get("https://dummyjson.com/products?limit=28")
  //   return this.http.get("https://hasanalaa.pythonanywhere.com/api/all-products/30/0")
  // }
  // getAllCategories( ){
  //   // return this.http.get("https://dummyjson.com/products/categories")
  //   return this.http.get("https://hasanalaa.pythonanywhere.com/api/all-categories")
  // }
  // getProductByCategories( keword:any){
  //   return this.http.get("https://hasanalaa.pythonanywhere.com/api/products/category/"+keword)
  // }
  // SerchProducts( keword:any){
  //   return this.http.get("https://hasanalaa.pythonanywhere.com/api/products/serach?q="+keword)

  // }
  // limtProducts( keword:any,skip:any){
  //   return this.http.get("https://hasanalaa.pythonanywhere.com/api/all-products/"+keword+"/"+skip)
  // }
  // GetProductById( id:any){
  //   // return this.http.get("https://dummyjson.com/products/"+id)
  //   return this.http.get("https://hasanalaa.pythonanywhere.com/api/products/"+id)
  // }

  // OrderProductById( data:any){
  //   // return this.http.get("https://dummyjson.com/products/"+id)
  //   return this.http.post("http://127.0.0.1:8000/api/products/order/",data)
  // }
}
