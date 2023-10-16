import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import * as AOS from 'aos';

@Component({
  selector: 'app-downloads',
  templateUrl: './downloads.component.html',
  styleUrls: ['./downloads.component.scss']
})
export class DownloadsComponent implements OnInit {

  constructor(private titleService: Title, private metaService: Meta) { }

  ngOnInit() {
    this.titleService.setTitle('Giftcardstonaira | The Best App to Redeem, Sell, and Exchange Gift Cards');
    this.metaService.updateTag({ name: 'description', content: 'Giftcardstonaira is the best app to redeem, sell, and exchange gift cards. With our app, you can easily redeem your gift cards at the highest rates' });
    this.metaService.updateTag({ name: 'keywords', content: 'redeem my gift card, app to redeem gift cards, gift card for sale, gift card exchange app, convert gift card to naira, redeem amazon card, exchange gift cards for cash, app to sell gift cards, gift card trading app, best site to trade gift cards, gift card buyers online, gift card rate, best app to redeem gift cards, sell gift card amazon, Steam card rate in Naira, sell gift cards instant payment, trade gift cards online instantly' });
    AOS.init({ once: true });
    AOS.refresh();
  }

}
