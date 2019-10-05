import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {RecordsService} from '../../services/records.service';

@Component({
  selector: 'app-records',
  templateUrl: './records.component.html',
  styleUrls: ['./records.component.css']
})
export class RecordsComponent implements OnInit {

  constructor(private activeRoute: ActivatedRoute, private recordService: RecordsService) { }

  ngOnInit() {
    this.recordService.getRecords().subscribe( data => {
      console.log(data);
    });
  }

}
