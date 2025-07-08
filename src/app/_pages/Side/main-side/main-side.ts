import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { RightSide } from "../../../_components/Side/right-side/right-side";
//import { FooterSide } from "../../../_components/Side/footer-side/footer-side";
import { CommonModule } from '@angular/common';
import { DividerModule } from 'primeng/divider';
import { MenuItem } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { Menu } from 'primeng/menu';
import { ActivatedRoute, Router, RouterLink, RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-main-side',
  imports: [
    RightSide,
    //FooterSide,
    CommonModule,
    DividerModule,
    Menu,
    ButtonModule,
    RouterLink,
    RouterOutlet,
    RouterModule
  ],
  templateUrl: './main-side.html',
  styleUrl: './main-side.scss',
})
export class MainSide implements OnInit {
  menuOpen: boolean = false;

  threePoint: boolean = false;
  theme: boolean = false;

  // mobile
  visible: boolean = false;

  @ViewChild('threePointMenu') threePointMenu!: ElementRef;
  @ViewChild('themeMenu') themeMenu!: ElementRef;
  @ViewChild('menuOpenMobile') menuOpenMobile!: ElementRef;

  items: MenuItem[] | undefined;

  constructor(private router: Router, private route: ActivatedRoute)
  {}

  ngOnInit() {
    const hasOutlet = this.route.children.some(child => child.outlet === 'rightSize');

    if (!hasOutlet) {
      this.router.navigate([{ outlets: { rightSize: ['home'] } }], {
        relativeTo: this.route
      });
    }

    this.items = [
      { label: 'next' },
      { label: 'v20' },
      { label: 'v19' },
      { label: 'v18' },
      { label: 'v17' },
      { label: 'v16' },
      { label: 'v15' },
      { label: 'v14' },
      { label: 'v13' },
      { label: 'v12' },
      { label: 'v11' },
      { label: 'v10' },
      { label: 'v9' },
      { label: 'v8' },
      { label: 'v7' },
      { label: 'v6' },
      { label: 'v5' },
      { label: 'v4' }
    ];
  }

  toggleMenu()
  {
    this.menuOpen = !this.menuOpen;
  }

  toggleThreePoint()
  {
    this.threePoint = !this.threePoint;
  }

  toggleTheme()
  {
    this.theme = !this.theme;
  }

  @HostListener('document:click', ['$event'])
  handleClickOutside(event: MouseEvent) {
    const target = event.target as HTMLElement;

    // Se estiver clicando fora do menu e fora do botão
    const clickedInsideThreePoint = this.threePointMenu?.nativeElement.contains(target);
    //const clickedIconThreePoint = target.classList.contains('pi-ellipsis-h');
    const clickedIconThreePoint = target.classList.contains('btn-7');

    if (!clickedInsideThreePoint && !clickedIconThreePoint) {
      this.threePoint = false;
    }

    const clickedInsideTheme = this.themeMenu?.nativeElement.contains(target);
    const clickedIconTheme = target.classList.contains('btn-8');

    if (!clickedInsideTheme && !clickedIconTheme) {
      this.theme = false;
    }

    // Mobile Mode
    const clickedInsideMenuOpenMobile = this.menuOpenMobile?.nativeElement.contains(target);
    const clickedIconMenuOpenMobile = target.classList.contains('btnMenuMobile');

    if (!clickedInsideMenuOpenMobile && !clickedIconMenuOpenMobile) {
      this.menuOpen = false;
    }
  }
}
