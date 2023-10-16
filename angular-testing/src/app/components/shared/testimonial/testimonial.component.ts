import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { SwiperComponent } from "swiper/angular";
import SwiperCore, { Autoplay, EffectFade, SwiperOptions, Virtual } from 'swiper';
SwiperCore.use([Virtual, Autoplay, EffectFade]);

@Component({
  selector: 'app-testimonial',
  templateUrl: './testimonial.component.html',
  styleUrls: ['./testimonial.component.scss']
})
export class TestimonialComponent implements OnInit {
  @ViewChild('swiper', { static: false }) swiper?: SwiperComponent;
  config: SwiperOptions = {
    slidesPerView: 1,
    spaceBetween: 20,
    navigation: false,
    pagination: false,
    autoplay: {
      delay: 10000
    },
    scrollbar: { draggable: true },
    breakpoints: {
      992: {
        slidesPerView: 4,
      },
      768: {
        slidesPerView: 3
      },
      1200: {
        slidesPerView: 4,
      }
    }
  };
  slideNext() {
    this.swiper!.swiperRef.slideNext(100);
  }
  slidePrev() {
    this.swiper!.swiperRef.slidePrev(100);
  }
  constructor() { }

  testimonials = [
    {
      image: 'assets/images/testimonials/avatar.png',
      text: 'Giftcardstonaira is one of the best gift card trading apps. Please feel free to download. I love its features and everything works smoothly',
      author: 'Pender Anking'
    },
    {
      image: 'assets/images/testimonials/avatar1.png',
      text: 'Honestly, I don\'t know how to describe how much this app has been of great help to me. Very fast user interface and fast withdrawals...Kudos to the developers.',
      author: 'Saint Awwal'
    },
    {
      image: 'assets/images/testimonials/avatar3.png',
      text: 'I really love this app because it is so fast and nice, my junior brother introduced me to this application and it has been long he told about it and I started using it this month. I love the app because they\'re so kind ❤😍️ I will continue trading gift card with the app. Thanks so much.',
      author: 'Daniel Bella'
    },
    {
      image: 'assets/images/testimonials/avatar7.png',
      text: 'Giftcardstonaira is a wonderful app which i have been using to redeem gift cards going to two years now. They do not delay transactions and they credit you accordingly. Anytime i had issues with my transactions i just chat with their customer care and the issues are immediately resolved. Thanks giftcardstonaira for being reliable. I am one satisfied customer with you',
      author: 'Honest Igein'
    },
    {
      image: 'assets/images/testimonials/avatar9.png',
      text: 'This app i must say is the best app to trade your giftcard. In the past, i was having problems of people cheating me when redeeming my gift card, they will lie that gift card is low and give me low amount but with this app, i am earning a lot. i suggest if you\'re having problems, better use this app, it\'s the best ever',
      author: 'Ajunwa Paul'
    },
    {
      image: 'assets/images/testimonials/avatar2.png',
      text: 'Been looking for an exchange app without stressful and mundane procedures for a while now, and i came across giftcardstonaira. At first, i was a bit skeptical but after giving it a shot, i can say it\'s one of the best and i highly recommend you reading this to give it a try. you won\'t regret it.',
      author: 'Fabian Joshua Chukwuma'
    },
    {
      image: 'assets/images/testimonials/avatar4.png',
      text: 'This app is so amazing, i\'m a guy that do doubt a lot and i did also when i was introduced to this app, but after my first trial, my doubt for it disappeared and my love for the app increases in everyday trading i do with it. it\'s very reliable and fast in terms of crediting, i\'m so happy finding this great app. i\'m giving it a 5 star because it deserves it, go for Giftcardstonaira, it\'s the best so far',
      author: 'Prince Samuel'
    },
  ];

  ngOnInit(): void {
  }

}
