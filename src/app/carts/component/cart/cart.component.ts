import { ToastrService } from 'ngx-toastr';
import { CartsService } from './../../carts.service';
import { Component, OnInit } from '@angular/core';
import * as jsPDF from 'jspdf';
import { MatDialog } from '@angular/material/dialog';
import { AppOrderDialogComponent } from './../../app-order-dialog/app-order-dialog.component';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  productsCart: any = []
  total: number = 0
  pdfSrc: string | undefined;
  constructor(private CartsService: CartsService, private ToastrService: ToastrService,private dialog: MatDialog) { }

  ngOnInit(): void {
    this.getCartProduct()
    this.getCartTotal()
  }
  getCartProduct() {
    if ("cart" in localStorage) {
      this.productsCart = JSON.parse(localStorage.getItem("cart")!)
    }




  }
  getCartTotal() {
    this.total = 0
    for (let x in this.productsCart)
      this.total += this.productsCart[x].quantity * this.calculateDiscountPrice(this.productsCart[x].item.price,this.productsCart[x].item.discountPercentage)

  }
  minusamount(index: any) {
    this.productsCart[index].quantity--
    localStorage.setItem("cart", JSON.stringify(this.productsCart))
    this.getCartTotal()
  }
  plusamount(index: any) {
    this.productsCart[index].quantity++
    localStorage.setItem("cart", JSON.stringify(this.productsCart))
    this.getCartTotal()


  }
  detecdChang() {
    localStorage.setItem("cart", JSON.stringify(this.productsCart))
    this.getCartTotal()
  }
  removeItem(index: any) {
    this.productsCart.splice(index, 1)
    localStorage.setItem("cart", JSON.stringify(this.productsCart))
    this.getCartTotal()


  }
  clearCart() {
    this.productsCart = []
    localStorage.setItem("cart", JSON.stringify(this.productsCart))
    this.getCartTotal()
  }

  orderCart() {
    const dialogRef = this.dialog.open(AppOrderDialogComponent, {
      // Optional configuration for the dialog
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
           let model
    let products:any [] = []
    for (let x in this.productsCart) {

      let product = {
        title: this.productsCart[x].item.title,
        quantity: this.productsCart[x].quantity,
        price: this.productsCart[x].item.price,
        name:result.name,
        number:result.number,
        location:result.location,

      }
      products.push(product)

      model = products
      // console.log(model)
    }


    this.clearCart()

    if (products.length==0){
      this.ToastrService.warning("add to cart first please")
    }
    else{
    this.CartsService.orderNow(model).subscribe(res => {
      // console.log(res)
      this.ToastrService.success("Well done your order is sucsessfully Send")
    })
  }
        // Handle submitted data (name and number) from the dialog
        console.log('Order details:', result);
      }
    });

  //   let model
  //   let products:any [] = []
  //   for (let x in this.productsCart) {

  //     let product = {
  //       title: this.productsCart[x].item.title,
  //       quantity: this.productsCart[x].quantity,
  //       price: this.productsCart[x].item.price

  //     }
  //     products.push(product)

  //     model = products
  //     // console.log(model)
  //   }


  //   this.clearCart()

  //   if (products.length==0){
  //     this.ToastrService.warning("add to cart first please")
  //   }
  //   else{
  //   this.CartsService.orderNow(model).subscribe(res => {
  //     // console.log(res)
  //     this.ToastrService.success("Well done your order is sucsessfully Send")
  //   })
  // }
  }

  calculateDiscountPrice(price: number, discountPercent: number) {
    if (discountPercent > 0) {
      const discountAmount = price * (discountPercent / 100);
      return price - discountAmount;
    } else {
      return price; // No discount applied
    }
  }
}
