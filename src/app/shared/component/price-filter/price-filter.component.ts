import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-price-filter',
  templateUrl: './price-filter.component.html',
  styleUrl: './price-filter.component.css'
})
export class PriceFilterComponent {

  constructor(private router: Router) { }

startChat() {
  const whatsappLink = 'https://api.whatsapp.com/send?phone=96170639378'; // Replace with your actual link if needed
  // const whatsappLink = 'www.google.com'; // Replace with your actual link if needed
  //   this.router.navigateByUrl(whatsappLink);
  // window.open(whatsappLink, '_blank');

}
}
