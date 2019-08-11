import { Component, OnInit } from '@angular/core';
import { MarketplaceService } from 'src/app/services/marketplace.service';
import { Loan } from 'src/app/classes/loan';
import MockMarketPlace from '../../mocks/OfflineMarketplace'

@Component({
  selector: 'app-rating-calculator',
  templateUrl: './rating-calculator.component.html',
  styleUrls: ['./rating-calculator.component.css']
})
export class RatingCalculatorComponent implements OnInit {
  allRatings: String[];
  filteredLoans: Loan[];
  marketplace: Loan[];
  avgLoan: number = 0;
  errFetch: boolean = false;
  constructor(private marketplaceService: MarketplaceService) { }

  ngOnInit() {
    this.marketplaceService.getMarketPlace().subscribe(
      result => {
        this.marketplace = result;
        this.filterAllRatings();
      },
      error => {
        this.marketplace = MockMarketPlace.MARKETPLACE;
        this.errFetch = true;
        this.filterAllRatings();
      });
  }
  computeAvgLoan(currentRate) {
    this.filteredLoans = this.marketplace.filter(
      m => m.rating === currentRate
    );
    this.avgLoan =
      this.filteredLoans.reduce((p, c) => p + c.amount, 0) /
      this.filteredLoans.length;
  }
  filterAllRatings(){
    this.allRatings = [
      ...new Set(this.marketplace.map(item => item.rating))
    ].sort();
  }

}
