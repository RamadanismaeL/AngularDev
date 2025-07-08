import { Component, /*ElementRef, ViewChild*/ } from '@angular/core';
//import { gsap } from 'gsap';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {
  /*
  @ViewChild('section1', { static: true }) section1!: ElementRef;
  @ViewChild('section2', { static: true }) section2!: ElementRef;

  ngAfterViewInit(): void {
    gsap.from(this.section1.nativeElement, {
      opacity: 0,
      y: 50,
      duration: 1.2,
      ease: 'power3.out'
    });

    gsap.from(this.section2.nativeElement, {
      scrollTrigger: this.section2.nativeElement,
      opacity: 0,
      y: 100,
      duration: 1,
      ease: 'power2.out'
    });
  }
    */
}
