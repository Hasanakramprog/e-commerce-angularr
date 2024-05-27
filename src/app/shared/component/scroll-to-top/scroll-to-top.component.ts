import { Component, HostListener } from '@angular/core';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-scroll-to-top',
  templateUrl: './scroll-to-top.component.html',
  styleUrls: ['./scroll-to-top.component.css']
})
export class ScrollToTopComponent {
  threshold = 100; // Adjust the threshold for showing the button (in pixels)

  constructor(private viewportScroller: ViewportScroller) {}

  @HostListener('window:scroll')
  onScroll() {
    const scrollPosition = window.pageYOffset;
    this.showButton = scrollPosition > this.threshold;
  }

  scrollToTop() {
    this.viewportScroller.scrollToPosition([0, 0]);
  }

  showButton = false; // Flag to control button visibility
}
