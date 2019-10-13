import {Component, OnInit, OnChanges, SimpleChanges} from '@angular/core';
import {MatDialog} from '@angular/material';
import {DialogOverviewExampleComponent} from '../../shared/components/dialog-overview-example/dialog-overview-example.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnChanges, OnInit{
  animal: string;
  name: string;

  constructor(public dialog: MatDialog) { }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogOverviewExampleComponent, {
      width: '250px',
      data: {name: this.name, animal: this.animal}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log("change", changes);
  }

  ngOnInit(): void {
    console.log('ngOnInit');
  }

}
