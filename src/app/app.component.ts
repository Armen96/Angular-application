import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

import { Observable, of, throwError } from 'rxjs';

import {catchError, map} from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{
  title = 'angular-app';

  constructor(private http: HttpClient) {

  }

  ngOnInit() {

    // this.http.get<any[]>('https://jsonplaceholder.typicode.com/posts')
    //   .pipe(
    //     map( data => {
    //       return data.map(el => ({body: el.body}))
    //     }),
    //     catchError(err => {
    //       return throwError(err);
    //     })
    //   ).subscribe(data => { console.log(data) })

  }


}
