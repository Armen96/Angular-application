import {
  Component, Input, OnInit,
  OnChanges, SimpleChanges,
  AfterViewChecked, AfterViewInit,
  AfterContentChecked, AfterContentInit, ViewChild
} from '@angular/core';
import {AlertComponent} from '../../../shared/components/alert/alert.component';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-record',
  templateUrl: './record.component.html',
  styleUrls: ['./record.component.css']
})
export class RecordComponent implements OnInit, OnChanges, AfterViewInit, AfterContentChecked, AfterContentInit, AfterViewChecked  {
  @Input() message;
  @ViewChild("AlertComponent", {static: false}) AlertComponent;

  showAlert: boolean = false;
  counter: number = 1;

  private data: Observable<any>;
  private values: Array<number> = [];
  private anyErrors: boolean;
  private finished: boolean;

  constructor() { }

  init() {
    this.data = new Observable(observer => {
      setTimeout(() => {
        observer.next(42);
      }, 1000);

      setTimeout(() => {
        observer.next(43);
      }, 2000);

      setTimeout(() => {
        observer.complete();
      }, 3000);
    });

    const subscription = this.data.subscribe(
      value => this.values.push(value),
      error => this.anyErrors = true,
      () => this.finished = true
    );
  }

  toggleAlert() {
    this.showAlert = !this.showAlert;
  }

  ngOnInit() {
    this.init();
    console.log('ngOnInit');
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

  increment() {
    this.counter++;
  }

  decrement(){
    this.counter--;
  }
}
