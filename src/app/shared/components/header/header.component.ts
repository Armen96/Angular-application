import { Component } from '@angular/core';
import * as fromStore from '../../../store';
import {Store} from '@ngrx/store';
import {AppState} from '../../ngrx/appState';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(protected store: Store<AppState>) {
    this.store.dispatch(new fromStore.LoadRecords());
  }
}
