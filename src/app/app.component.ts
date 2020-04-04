import { Component, OnInit } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {AuthService} from './services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  public isLogged = false;

  constructor(
    public translate: TranslateService,
    protected authService: AuthService,
  ) {
    translate.addLangs(['en', 'klingon']);
    translate.setDefaultLang('en');
    translate.use('en');

    this.isLogged = authService.isLoggedIn();
  }

  ngOnInit() {}
}
