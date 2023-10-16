import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import * as AOS from 'aos';
import { Category } from 'src/app/models/category';
import { SubCategory } from 'src/app/models/subcategory';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-how-to',
  templateUrl: './how-to.component.html',
  styleUrls: ['./how-to.component.scss']
})
export class HowToComponent implements OnInit {
  currency: String = 'Naira';
  payOut: number = 0;
  selectedCategory?: string = 'Steam';
  selectedSubCategory?: any;
  amount?: number;
  categories: Array<Category> = [];
  subcategories: Array<SubCategory> = [];
  filteredSubcategories: Array<SubCategory> = [];

  constructor(private titleService: Title, private metaService: Meta, private route: ActivatedRoute, private apiService: ApiService) { }

  ngOnInit() {
    this.selectedCategory = this.route.snapshot.paramMap.get('category') ?? '';
    this.titleService.setTitle(`How To Sell Steam Gift Cards For Cash`);
    this.metaService.updateTag({ name: 'description', content: `Learn how to sell Steam Gift Card in Nigeria and Ghana at the highest rates and where to sell Steam Gift Cards for cash and get paid Instantly.` });
    this.metaService.updateTag({ name: 'keywords', content: `redeem my gift card, app to redeem gift cards, gift card for sale, gift card exchange app, convert gift card to naira, redeem amazon card, exchange gift cards for cash, app to sell gift cards, gift card trading app, best site to trade gift cards, $100 Steam card to naira, gift card rate, best app to redeem gift cards, sell gift card amazon, Steam card rate in Naira, 100 euro steam card to naira, trade gift cards online instantly` });
    AOS.init({ once: false });
    AOS.refresh();
    this.loadItems();
  }

  trackByFn(index: number, item: any) {
    return item.id;
  }

  loadItems() {
    this.apiService.getRatesData().then((data) => {
      if (data.data != undefined) {
        this.categories = data.data.categories;
        this.subcategories = data.data.giftcards;
        this.selectCategory();
      }
    }).catch((e) => {
    });
  }

  updateCurrency(value: String) {
    // this.currency = value;
  }

  calculateAmount() {
    if (this.selectedSubCategory != undefined && this.amount != undefined) {
      this.payOut = (this.selectedSubCategory.rate ?? 0) * this.amount;
    }
  }

  selectCategory() {
    this.filteredSubcategories = this.subcategories.filter((item) => item.category?.name?.toLowerCase().includes('steam'));
    this.payOut = 0;
  }

  selectSubCategory() {
    this.payOut = 0;
    this.calculateAmount();
  }

}
