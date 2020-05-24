import { Component, OnInit } from '@angular/core';
import {select, Store} from '@ngrx/store';
import { AppState } from '../../../shared/ngrx/appState';
import * as fromAction from '../../../store';
import {Observable} from 'rxjs';
import {UsersInterface} from '../../../interfaces/users.interface';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  users$: Observable<UsersInterface[]>;
  processing: string = 'Admin_Section_Under_The_Development';

  constructor(protected store: Store<AppState>) { }

  ngOnInit(): void {
    this.store.dispatch(new fromAction.AdminUserList());

    this.users$ = this.store.pipe(select(fromAction.getUserList));
  }
}
