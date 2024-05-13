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
    // return this.http.get("https://dummyjson.com/products?limit=28")
    return this.http.get("http://127.0.0.1:8000/api/all-products/30/0")
  }
  getAllCategories( ){
    // return this.http.get("https://dummyjson.com/products/categories")
    return this.http.get("http://127.0.0.1:8000/api/all-categories")
  }
  getProductByCategories( keword:any){
    return this.http.get("http://127.0.0.1:8000/api/products/category/"+keword)
  }
  SerchProducts( keword:any){
    return this.http.get("http://127.0.0.1:8000/api/products/serach?q="+keword)

  }
  limtProducts( keword:any,skip:any){
    return this.http.get("http://127.0.0.1:8000/api/all-products/"+keword+"/"+skip)
  }
  GetProductById( id:any){
    // return this.http.get("https://dummyjson.com/products/"+id)
    return this.http.get("http://127.0.0.1:8000/api/products/"+id)
  }
}
