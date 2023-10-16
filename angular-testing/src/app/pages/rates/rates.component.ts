import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import * as AOS from 'aos';
import { Category } from 'src/app/models/category';
import { SubCategory } from 'src/app/models/subcategory';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-rates',
  templateUrl: './rates.component.html',
  styleUrls: ['./rates.component.scss']
})
export class RatesComponent implements OnInit {
  currency: String = 'Naira';
  payOut: number = 0;
  selectedCategory?: Category;
  selectedSubCategory?: SubCategory;
  amount?: number;
  categories: Array<Category> = [];
  subcategories: Array<SubCategory> = [];
  filteredSubcategories: Array<SubCategory> = [];

  constructor(private titleService: Title, private metaService: Meta, private apiService: ApiService) { }

  ngOnInit() {
    this.titleService.setTitle('Giftcardstonaira Rate Calculator - Gift Cards With Highest Rates');
    this.metaService.updateTag({ name: 'description', content: 'With the Giftcardstonaira rate calculator, you can discover gift cards and their rates. We provide the highest rates in the market.' });
    this.metaService.updateTag({ name: 'keywords', content: 'redeem my gift card, app to redeem gift cards, gift card for sale, gift card exchange app, convert gift card to naira, redeem amazon card, exchange gift cards for cash, app to sell gift cards, gift card trading app, best site to trade gift cards, $100 Steam card to naira, gift card rate, best app to redeem gift cards, sell gift card amazon, Steam card rate in Naira, gift cards with the highest rate, trade gift cards online instantly' });
    AOS.init({ once: true });
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
        this.selectedCategory = undefined;
      }
    }).catch((e) => {
    });
  }

  updateCurrency(value: String) {
    // this.currency = value;
  }

  calculateAmount() {
    if (this.selectedSubCategory != undefined && this.amount != undefined) {
      this.payOut = (this.selectedSubCategory?.rate ?? 1) * this.amount;
    }
  }

  selectCategory() {
    const filetredArray = this.subcategories.filter((item) => item.category?.id === this.selectedCategory?.id);
    this.filteredSubcategories = filetredArray;
    this.payOut = 0;
  }

  selectSubCategory() {
    this.payOut = 0;
    this.calculateAmount();
  }
}
