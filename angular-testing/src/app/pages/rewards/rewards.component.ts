import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import * as AOS from 'aos';

@Component({
  selector: 'app-rewards',
  templateUrl: './rewards.component.html',
  styleUrls: ['./rewards.component.scss']
})
export class RewardsComponent implements OnInit {
  constructor(private titleService: Title, private metaService: Meta) { }

  ngOnInit() {
    this.titleService.setTitle('Rewards - Giftcardstonaira');
    this.metaService.updateTag({ name: 'description', content: 'GiftcardstoNaira is the Best Platform to Redeem, Trade and Sell Gift Cards at the Highest Rates in Nigeria and Ghana and get Instant Payment in Naira or Cedis.' });
    this.metaService.updateTag({ name: 'keywords', content: 'redeem my gift card, app to redeem gift cards, gift card for sale, gift card exchange app, convert gift card to naira, redeem amazon card, exchange gift cards for cash, app to sell gift cards, gift card trading app, best site to trade gift cards, gift card buyers online, gift card rate, best app to redeem gift cards, sell gift card amazon, Steam card rate in Naira, sell gift cards instant payment, trade gift cards online instantly' });
    AOS.init({ once: true });
    AOS.refresh();
  }
}
