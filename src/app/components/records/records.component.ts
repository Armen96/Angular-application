import {Component, OnInit, Input, ViewChild, Inject} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {RecordsService} from '../../services/records.service';
import {RecordComponent} from './record/record.component';

@Component({
  selector: 'app-records',
  templateUrl: './records.component.html',
  styleUrls: ['./records.component.css']
})
export class RecordsComponent implements OnInit {
  @Input() recordName: string = "";

  constructor(
    @Inject(RecordsService) private recordService
  ) { }

  ngOnInit() {
    this.recordService.getRecords().subscribe( data => {
      console.log("INJECT", data);
    });
  }
}
