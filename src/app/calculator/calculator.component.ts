import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  // mytotal: any = ''
  // rateofInterest = ''
  emi = 0;
  total = 0;
  amount:any;
  month:any;
  interest=0;
  rate:any;
  calculateResult(personalAmount: string, durations: string, loanTypes: string) {
    console.log(personalAmount, durations, loanTypes);
    this.emi = 0;
    this.amount = parseFloat(personalAmount)
    this.month = parseInt(durations)
    this.rate = parseFloat(loanTypes)
    this.interest = (this.amount * (this.rate * 0.01))/this.month;
    this.emi = ((this.amount/this.month) + this.interest);
    this.total = this.interest + this.emi + this.amount;


    //a =  r(1+r)*n) / ((1+r)*n-1)
    //  this.mytotal = this.personalAmount * this.rateofInterest * Math.pow(1 + rateofInterest, Duration ) / (Math.pow(1 + rateofIterest, Duration) -1);

    // mytotal = pAmount*rateOfInterest*Math.pow(1 + rateOfInterest, duration) / (Math.pow(1 + rateOfInterest, duration) - 1);

  }

}