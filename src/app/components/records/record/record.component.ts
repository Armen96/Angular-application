import {
  Component, Input, OnInit,
  OnChanges, SimpleChanges,
  AfterViewChecked, AfterViewInit,
  AfterContentChecked, AfterContentInit
} from '@angular/core';

@Component({
  selector: 'app-record',
  templateUrl: './record.component.html',
  styleUrls: ['./record.component.css']
})
export class RecordComponent implements OnInit, OnChanges, AfterViewInit, AfterContentChecked, AfterContentInit, AfterViewChecked  {
  @Input() message;

  constructor() { }

  ngOnInit() {
    console.log('message ', this.message);
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('CHANGE DETECTION');
  }

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit');
  }

  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked');
  }

  ngAfterContentInit(): void {
    console.log('ngAfterContentInit');
  }

  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked');
  }
}
