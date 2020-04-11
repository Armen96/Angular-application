import {LoginComponent} from './login.component';
import {ComponentFixture, TestBed} from '@angular/core/testing';
import {combineReducers, StoreModule} from '@ngrx/store';
import * as fromStore from '../../../../store';
import {RouterTestingModule} from '@angular/router/testing';
import {Component} from '@angular/core';
import {AuthService} from '../../../../services';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {FormsModule} from '@angular/forms';

@Component({
  template: ''
})
class DummyComponent {}

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  const routes = [{
    path: '**',
    component: DummyComponent
  }];

  beforeEach(() => {
      TestBed.configureTestingModule({
        declarations: [
          LoginComponent,
          DummyComponent
        ],
        imports: [
          StoreModule.forRoot({
            auth: combineReducers(fromStore.authReducer)
          }),
          RouterTestingModule.withRoutes(routes),
          HttpClientTestingModule,
          FormsModule
        ],
        providers: [AuthService]
      });

      fixture = TestBed.createComponent(LoginComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('check status property', () => {
    expect(component.status).toEqual(true);
    component.changeStatusToFalse();
    expect(component.status).toEqual(false);
  });
});
