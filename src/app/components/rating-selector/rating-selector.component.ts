import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-rating-selector',
  templateUrl: './rating-selector.component.html',
  styleUrls: ['./rating-selector.component.css']
})
export class RatingSelectorComponent implements OnInit {
  @Input() allRatings: string[];
  @Input() err: boolean;
  @Output() ratingSelected = new EventEmitter();

  currentRating: String;
  constructor() { }

  ngOnInit() {
  }
}
