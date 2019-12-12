import {ChangeDetectionStrategy, Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  changeDetection: ChangeDetectionStrategy.Default
})
export class HomeComponent implements OnChanges, OnInit {
  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    console.log("change", changes);
  }

  ngOnInit(): void {
    console.log('ngOnInit');
  }

}
