import { Component, OnInit, ElementRef, ViewChild, HostListener, Input } from '@angular/core';

@Component({
  selector: 'app-mobile-nav',
  templateUrl: './mobile-nav.component.html',
  styleUrls: ['./mobile-nav.component.scss']
})
export class MobileNavComponent {
  @Input() isAlt?: boolean = false;
  @ViewChild('nav', { static: true }) public nav!: ElementRef;
  @ViewChild('backdrop', { static: true }) public backdrop!: ElementRef;
  public screenWidth: any;
  public screenHeight: any;
  isOpen: Boolean = false;
  constructor() { }
  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.screenWidth = window.innerWidth;
    this.screenHeight = window.innerHeight;
  }

  openDrawer() {

    this.isOpen = !this.isOpen;
    if (this.isOpen == true) {
      this.nav.nativeElement.style.width = "100%";
      this.backdrop.nativeElement.style.width = "100%";
    }
    else {
      this.nav.nativeElement.style.width = "0%";
      this.backdrop.nativeElement.style.width = "0%";
    }
  }


  ngOnInit(): void {
    this.screenWidth = window.innerWidth;
    this.screenHeight = window.innerHeight;
  }

}
