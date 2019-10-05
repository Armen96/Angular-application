import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  title: string = "Hello World!";
  currencyFormat: string = 'EUR';
  name = 'Armen';

  constructor() { }

  ngOnInit() {
  }

  changeCurrency() {
    this.currencyFormat = "INR"
  }

}
