import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import * as AOS from 'aos';
import { AxiosError } from 'axios';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from 'src/app/services/api.service';
import { Intercom } from 'ng-intercom';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {
  name?: string;
  email?: string;
  message?: string;

  constructor(private titleService: Title, private intercom: Intercom, private metaService: Meta, private apiService: ApiService, private spinnerService: NgxSpinnerService, private toast: ToastrService,) { }

  ngOnInit() {
    this.titleService.setTitle('Contact Us - Giftcardstonaira');
    this.metaService.updateTag({ name: 'description', content: 'GiftcardstoNaira is the Best Platform to Redeem, Trade and Sell Gift Cards at the Highest Rates in Nigeria and Ghana and get Instant Payment in Naira or Cedis.' });
    this.metaService.updateTag({ name: 'keywords', content: 'redeem my gift card, app to redeem gift cards, gift card for sale, gift card exchange app, convert gift card to naira, redeem amazon card, exchange gift cards for cash, app to sell gift cards, gift card trading app, best site to trade gift cards, gift card buyers online, gift card rate, best app to redeem gift cards, sell gift card amazon, Steam card rate in Naira, sell gift cards instant payment, trade gift cards online instantly' });
    AOS.init({ once: true });
    AOS.refresh();
  }

  getErrorString(error: AxiosError): string {
    if (error.response) {
      var err = error.response.data as any;
      if (err != undefined && err != null) {
        var res = err.message as string;
        return res ?? error.message;
      }
      else {
        return 'An unknown error occurred';
      }
    } else if (error.request) {
      return 'Error occurred while sending request';
    } else {
      return 'An unknown error occurred';
    }
  }

  submitForm() {
    if (this.name != undefined && this.email != undefined && this.message != undefined) {
      this.spinnerService.show();
      this.apiService.submitContactForm(this.name, this.email, this.message).then((data) => {
        this.spinnerService.hide();
        if (data.data.success == true) {
          this.toast.success('Message sent successfully');
        }
      }).catch((e) => {
        this.spinnerService.hide();
        this.toast.error(this.getErrorString(e));
      });
    }
  }

  openIntercom() {
    this.intercom.show();
  }
}
