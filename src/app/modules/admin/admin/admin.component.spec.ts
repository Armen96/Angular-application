import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminComponent } from './admin.component';
import {combineReducers, StoreModule} from '@ngrx/store';
import * as fromStore from '../../../store';
import {RouterTestingModule} from '@angular/router/testing';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {FormsModule} from '@angular/forms';
import {TranslateModule} from '@ngx-translate/core';
import {AuthService} from '../../../services';
import {Component} from '@angular/core';

@Component({
  template: ''
})
class DummyComponent {}

describe('AdminComponent', () => {
  let component: AdminComponent;
  let fixture: ComponentFixture<AdminComponent>;
  const routes = [{
    path: '**',
    component: DummyComponent
  }];

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminComponent ],
      imports: [
        StoreModule.forRoot({

        }),
        RouterTestingModule.withRoutes(routes),
        HttpClientTestingModule,
        FormsModule,
        TranslateModule
      ],
      providers: [AuthService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
