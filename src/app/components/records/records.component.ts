import {Component, OnInit, OnChanges, SimpleChanges, DoCheck, OnDestroy, Input} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {RecordsService} from '../../services/records.service';

@Component({
  selector: 'app-records',
  templateUrl: './records.component.html',
  styleUrls: ['./records.component.css']
})
export class RecordsComponent implements OnInit, OnChanges, DoCheck, OnDestroy {
  @Input() recordName: string = "";
  message: string | number = "Hello Message";

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
    console.log('CHANGE DETECTED ');
  }

  ngDoCheck(): void {
    console.log('DoCheck')
  }

  ngOnDestroy(): void {
    console.log('Component Destroyed');
  }

}
