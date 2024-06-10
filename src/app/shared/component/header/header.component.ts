import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { interval } from 'rxjs';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  slideIndex = 0;

  slides: string[] = [
    'GET 10% OFF!',
    'NEW Discount!! ' // Corrected discount percentage
  ];
  constructor() {
    interval(20000) // Adjust interval as needed (in milliseconds)
      .subscribe(() => this.nextSlide());
  }
  nextSlide() {
    this.slideIndex = (this.slideIndex + 1) % this.slides.length;
  }
  varibleNavbar:boolean=false
  ngOnInit(): void {
  }
  openToggelMenu(){
    this.varibleNavbar= !this.varibleNavbar
  }
  getSlide() {
    return this.slides[this.slideIndex];
}
prevSlide() {
  this.slideIndex = (this.slideIndex - 1 + this.slides.length) % this.slides.length;
}

scroll() {
  const element = document.getElementById("contact") as HTMLElement | null;

  if (element) {
    element.scrollIntoView();
  } else {
    // Handle the case where the element is not found
    console.error("Element with ID 'contact' not found.");
  }
}
}
