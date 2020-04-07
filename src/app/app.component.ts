import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {AuthService} from './services';
import {UiToastService} from './shared/ui-toast/ui-toast.service';
import {IgxToastComponent} from 'igniteui-angular';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit, AfterViewInit {
  public isLogged = false;
  @ViewChild('toast', { static: true })
  public uiToast: IgxToastComponent;

  constructor(
    public translate: TranslateService,
    protected authService: AuthService,
    protected toastService: UiToastService
  ) {
    translate.addLangs(['en', 'klingon']);
    translate.setDefaultLang('en');
    translate.use('en');

    this.isLogged = authService.isLoggedIn();
  }

  ngOnInit() {}

  ngAfterViewInit() {
    this.toastService.setToastComponent(this.uiToast);
  }
}
