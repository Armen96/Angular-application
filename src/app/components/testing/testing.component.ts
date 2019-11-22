import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-testing',
  templateUrl: './testing.component.html',
  styleUrls: ['./testing.component.css']
})
export class TestingComponent implements OnInit {

  message: string;

  constructor() { }

  ngOnInit() {
  }

  updateMessage(msg: string) {
    this.message = msg;
  }

  resetMessage() {
    this.message = '';
  }
}
