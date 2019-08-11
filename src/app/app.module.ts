import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import localeCs from '@angular/common/locales/cs';
registerLocaleData(localeCs);
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import {MatSelectModule} from '@angular/material/select';
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { RatingCalculatorComponent } from './components/rating-calculator/rating-calculator.component';
import { RatingSelectorComponent } from './components/rating-selector/rating-selector.component';
import { AvgLoanAmountComponent } from './components/avg-loan-amount/avg-loan-amount.component';
import { MarketplaceService } from './services/marketplace.service';
import { registerLocaleData } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RatingCalculatorComponent,
    RatingSelectorComponent,
    AvgLoanAmountComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatSelectModule,
    HttpClientModule
  ],
  providers: [
    MarketplaceService,
    {

      provide: LOCALE_ID,
      useValue: 'cs'
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
