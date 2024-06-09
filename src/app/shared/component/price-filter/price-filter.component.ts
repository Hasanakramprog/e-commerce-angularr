import { Component } from '@angular/core';

@Component({
  selector: 'app-price-filter',
  templateUrl: './price-filter.component.html',
  styleUrl: './price-filter.component.css'
})
export class PriceFilterComponent {
  minPrice = 0; // Minimum price (can be adjusted based on your data)
  maxPrice = 100; // Maximum price (can be adjusted based on your data)
  priceStep = 10; // Increment for the slider

  filterRange = { min: this.minPrice, max: this.maxPrice };
}
