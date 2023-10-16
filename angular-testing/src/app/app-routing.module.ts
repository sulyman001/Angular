import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { RewardsComponent } from './pages/rewards/rewards.component';
import { RatesComponent } from './pages/rates/rates.component';
import { PrivacyComponent } from './pages/privacy/privacy.component';
import { TermsComponent } from './pages/terms/terms.component';
import { AmlComponent } from './pages/aml/aml.component';
import { AboutComponent } from './pages/about/about.component';
import { DownloadsComponent } from './pages/downloads/downloads.component';
import { FaqsComponent } from './pages/faqs/faqs.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { HowToComponent } from './pages/how-to/how-to.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { HowToAmazonComponent } from './pages/how-to-amazon/how-to-amazon.component';
import { HowToItunesComponent } from './pages/how-to-itunes/how-to-itunes.component';
import { HowToGoogleComponent } from './pages/how-to-google/how-to-google.component';


const routes: Routes = [
  { path: '', component: HomeComponent, redirectTo: '', pathMatch: 'full' },
  { path: 'rewards', component: RewardsComponent },
  { path: 'rates', component: RatesComponent },
  { path: 'download', component: DownloadsComponent },
  { path: 'faqs', component: FaqsComponent },
  { path: 'privacy', component: PrivacyComponent },
  { path: 'terms', component: TermsComponent },
  { path: 'aml', component: AmlComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactUsComponent },
  { path: 'how-to-sell-steam-gift-card', component: HowToComponent },
  { path: 'how-to-sell-amazon-gift-card', component: HowToAmazonComponent },
  { path: 'how-to-sell-itunes-gift-card', component: HowToItunesComponent },
  { path: 'how-to-sell-google-play-gift-card', component: HowToGoogleComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'top' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
