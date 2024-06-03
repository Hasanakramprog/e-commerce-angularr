import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
  host: { class: 'd-block' },
})
export class ProductComponent implements OnInit {
  @Input() data: any = []
  @Output() item = new EventEmitter();
  constructor() { }
  show: boolean=false
  amount: number = 1
  ngOnInit(): void {
  }

  onRateChange(index:any){
    console.log(index)
    console.log(this.data.id)

  }
  // get single proudct information
  add() {
    this.item.emit({ item:this.data, quantity: this.amount })


  }
  calculateDiscountPrice(price: number, discountPercent: number) {
    if (discountPercent > 0) {
      const discountAmount = price * (discountPercent / 100);
      let discountPrice= price - discountAmount;
      let discountPriceString=discountPrice.toFixed(2);
      discountPrice=+discountPriceString;

      return discountPrice;
    } else {
      return price; // No discount applied
    }
  }


}
