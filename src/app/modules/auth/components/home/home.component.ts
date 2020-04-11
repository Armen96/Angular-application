import {Component, OnInit} from '@angular/core';
import {CommonService} from '../../../../services';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  technologies$: Observable<string[]>;
  constructor(protected commonService: CommonService) { }

  ngOnInit(): void {
    this.technologies$ = this.commonService.getTechnologies();
  }
}
