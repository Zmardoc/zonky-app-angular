import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AvgLoanAmountComponent } from './avg-loan-amount.component';

describe('AvgLoanAmountComponent', () => {
  let component: AvgLoanAmountComponent;
  let fixture: ComponentFixture<AvgLoanAmountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AvgLoanAmountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AvgLoanAmountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
