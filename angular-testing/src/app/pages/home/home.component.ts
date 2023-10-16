import { Component, ElementRef, OnInit, OnDestroy, ViewChild, HostListener } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { fadeInAnimation, scaleInAnimation, slideInLeft, slideInRight } from 'src/app/components/shared/animations';
import * as AOS from 'aos';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    trigger('fadeInOut', [
      state('void', style({
        opacity: 0
      })),
      transition('void <=> *', [
        style({
          opacity: 0
        }),
        animate('500ms ease-in-out')
      ])
    ]), fadeInAnimation, scaleInAnimation, slideInLeft, slideInRight
  ]
})

export class HomeComponent implements OnInit {
  marqueeLogos: Array<String> = [
    'assets/icons/ebay.svg',
    'assets/icons/nike.svg',
    'assets/icons/vanilla.svg',
    'assets/icons/sephora.svg',
    'assets/icons/american_express.svg',
    'assets/icons/google_play.svg',
    'assets/icons/amazon.svg',
    'assets/icons/steam.svg',
    'assets/icons/walmart.svg',
    'assets/icons/nordstom.svg',
  ];

  constructor(private elementRef: ElementRef, private titleService: Title, private metaService: Meta) {
  }

  ngOnInit() {
    this.titleService.setTitle('GiftCardsToNaira - Best Platform To Sell Gift Cards At High Rates');
    this.metaService.updateTag({ name: 'description', content: 'GiftcardstoNaira is the Best Platform to Redeem, Trade and Sell Gift Cards at the Highest Rates in Nigeria and Ghana and get Instant Payment in Naira or Cedis.' });
    this.metaService.updateTag({ name: 'keywords', content: 'redeem my gift card, app to redeem gift cards, gift card for sale, gift card exchange app, convert gift card to naira, redeem amazon card, exchange gift cards for cash, app to sell gift cards, gift card trading app, best site to trade gift cards, gift card buyers online, gift card rate, best app to redeem gift cards, sell gift card amazon, Steam card rate in Naira, sell gift cards instant payment, trade gift cards online instantly' });
    AOS.init({ once: true, disable: 'phone' });
    AOS.refresh();
  }

}
