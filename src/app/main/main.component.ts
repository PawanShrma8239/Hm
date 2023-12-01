import { Component, HostListener  } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
  isScrollingDown = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrollingDown = window.scrollY > 100; // Adjust the scroll threshold as needed
  }

  scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
