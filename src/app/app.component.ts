import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{

  constructor(
    private http: HttpClient,
    public translate: TranslateService
  ) {
    translate.addLangs(['en', 'klingon'])
    translate.setDefaultLang('en');
    translate.use('en');
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
