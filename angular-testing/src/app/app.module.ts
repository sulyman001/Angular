import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { SwiperModule } from 'swiper/angular';
import { ToastrModule } from 'ngx-toastr';
import { NgxSpinnerModule } from 'ngx-spinner';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MobileNavComponent } from './components/shared/mobile-nav/mobile-nav.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { AppDownloadComponent } from './components/shared/app-download/app-download.component';
import { HomeComponent } from './pages/home/home.component';
import { RatesComponent } from './pages/rates/rates.component';
import { RewardsComponent } from './pages/rewards/rewards.component';
import { DownloadsComponent } from './pages/downloads/downloads.component';
import { AboutComponent } from './pages/about/about.component';
import { TermsComponent } from './pages/terms/terms.component';
import { PrivacyComponent } from './pages/privacy/privacy.component';
import { AmlComponent } from './pages/aml/aml.component';
import { HowToComponent } from './pages/how-to/how-to.component';
import { TestimonialComponent } from './components/shared/testimonial/testimonial.component';
import { FeaturedComponent } from './components/shared/featured/featured.component';
import { FaqComponent } from './components/faq/faq.component';
import { FaqsComponent } from './pages/faqs/faqs.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { HowToAmazonComponent } from './pages/how-to-amazon/how-to-amazon.component';
import { HowToItunesComponent } from './pages/how-to-itunes/how-to-itunes.component';
import { HowToGoogleComponent } from './pages/how-to-google/how-to-google.component';
// import { IntercomModule } from 'ng-intercom';
// import { environment } from 'src/environments/environment';


@NgModule({
  declarations: [
    AppComponent,
    MobileNavComponent,
    NavbarComponent,
    FooterComponent,
    AppDownloadComponent,
    HomeComponent,
    RewardsComponent,
    DownloadsComponent,
    AboutComponent,
    TermsComponent,
    PrivacyComponent,
    AmlComponent,
    TestimonialComponent,
    FeaturedComponent,
    FaqComponent,
    FaqsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SwiperModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ToastrModule.forRoot(),
    NgxSpinnerModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
