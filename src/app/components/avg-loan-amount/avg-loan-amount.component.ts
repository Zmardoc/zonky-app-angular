import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-avg-loan-amount',
  templateUrl: './avg-loan-amount.component.html',
  styleUrls: ['./avg-loan-amount.component.css']
})
export class AvgLoanAmountComponent implements OnInit {
  @Input() loanAmount:number;
  @Input() avgLoan:number;

  constructor() { }

  ngOnInit() {
  }

}
