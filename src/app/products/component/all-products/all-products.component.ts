import { ProductsService } from './../../service/products.service';
import { Component, OnInit, Pipe, } from '@angular/core';
import { NgbRatingConfig, NgbRatingModule } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { Options, LabelType } from "@angular-slider/ngx-slider";
@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.scss'],


})

export class AllProductsComponent implements OnInit {
  constructor(private service: ProductsService,
    config: NgbRatingConfig,
    private ToastrService: ToastrService
  ) {
    config.max = 5;
    config.readonly = true;


  }
  currentPage=0
  serchValue: string = ''
  checkErorr: any[] = [];
  productsCart: any[] = [];
  products: any[] = [];
  Categories: any[] = [];
  loding: boolean = true
  error: boolean = false
  minValue: number = 100;
  maxValue: number = 400;
  options: Options = {
    floor: 0,
    ceil: 500,
    translate: (value: number, label: LabelType): string => {
      switch (label) {
        case LabelType.Low:
          return "<b>Min price:</b> $" + value;
        case LabelType.High:
          return "<b>Max price:</b> $" + value;
        default:
          return "$" + value;
      }
    }
  };
  ngOnInit(): void {
    this.getProducts()
    this.getCategories()



  }
  filterPrice(event: any){
    let lowvalue = event.value
    let highvalue = event.highValue
    this.loding = true
    this.service.getProudactsByPrice(lowvalue,highvalue).subscribe((res: any) => {
      console.log(res)
      this.products = res.products
      this.loding = false

  });
}


  getProducts() {
    this.loding = true
    this.service.getAllProudacts().subscribe((res: any) => {
      console.log(res)
      this.products = res.products
      this.loding = false

      //  console.log(this.products )
    })
  }

  getCategories() {
    this.loding = true

    this.service.getAllCategories().subscribe((res: any) => {
      // console.log(res)
      this.Categories = res
      // console.log(this.Categories)
      this.loding = false

    })

  }
  filterCategories(event: any) {

    let eventvalue = event.target.value
    if (eventvalue == "All Products") {

      this.getProducts()

    } else {

      this.getProdctByCategore(eventvalue)

    }
    // alert(eventvalue)
  }
  getProdctByCategore(eventvalue: any) {
    this.loding = true

    this.service.getProductByCategories(eventvalue).subscribe((res: any) => {
      console.log(res)
      this.products = res.products
      this.loding = false

    })
  }

  serchProducts(event: any) {
    let valueEvent = event.target.value

    console.log(valueEvent)
    this.serchValue = valueEvent
    if (valueEvent !== "") {
      // this.loding = true

      this.service.SerchProducts(valueEvent).subscribe((res: any) => {
        this.products = res.products
        // this.loding = false

        // handel error in serch product
        this.service.castUser.subscribe(res => {
          this.checkErorr = this.products
          console.log(this.checkErorr)
          if (this.checkErorr.length == 0) {
            this.error = true

          } else {
            this.error = false
          }
        })

      }

      );

    } else {
      this.getProducts()

    }
  }
  isActive(index: number): boolean {
    return this.currentPage === index;
  }
  pagination(keword: any, skip: any,current_index:any) {
      this.currentPage=current_index
      this.service.limtProducts(keword, skip).subscribe((res: any) => {
        this.products = res.products
        this.error = false


      })


  }
  addToCart(product: any) {
    console.log()

    if ("cart" in localStorage) {
      this.productsCart = JSON.parse(localStorage.getItem("cart")!)
      let exit = this.productsCart.find(item => item.item.id == product.item.id)
      if (exit) {
        this.ToastrService.warning('', ' product already on cart !', {
          positionClass: 'fixed-top',

        });
      } else {

        this.ToastrService.success('', 'product added in cart successfully', {
          positionClass: 'fixed-top',
        });

        this.productsCart.push(product)
        localStorage.setItem("cart", JSON.stringify(this.productsCart))
      }

    } else {
      this.productsCart.push(product)
      localStorage.setItem("cart", JSON.stringify(this.productsCart))
    }
  }

}
