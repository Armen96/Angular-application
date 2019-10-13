import {Component, OnInit, OnChanges, SimpleChanges, DoCheck, OnDestroy, Input, ViewChild} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {RecordsService} from '../../services/records.service';
import {RecordComponent} from './record/record.component';

@Component({
  selector: 'app-records',
  templateUrl: './records.component.html',
  styleUrls: ['./records.component.css']
})
export class RecordsComponent implements OnInit, OnChanges, DoCheck, OnDestroy {
  @Input() recordName: string = "";
  message: string | number = "Hello Message";

  @ViewChild(RecordComponent, {static: false})
  private counterComponent: RecordComponent;

  constructor(private activeRoute: ActivatedRoute, private recordService: RecordsService) { }

  ngOnInit() {
    console.log('ngOnInit');
    this.recordService.getRecords().subscribe( data => {
      // console.log(data);
    });
  }

  resetInputValue() {
    this.message = Math.random() * 50;
    this.recordName = "text";
  }

  ngOnChanges(changes: SimpleChanges): void {
   // console.log('CHANGE DETECTED ');
  }

  ngDoCheck(): void {
    console.log('DoCheck')
  }

  ngOnDestroy(): void {
   // console.log('Component Destroyed');
  }

  increment() {
    this.counterComponent.increment();
  }

  decrement(){
    this.counterComponent.decrement();
  }

}
