import {RegisterComponent} from './register.component';
import {ComponentFixture, TestBed} from '@angular/core/testing';
import {AuthService} from '../../../../services';
import {RouterTestingModule} from '@angular/router/testing';
import {FormsModule} from '@angular/forms';
import {StoreModule} from '@ngrx/store';
import * as fromStore from '../../../../store';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {FakeTranslateModule} from '../../../../../test-utils/test-utils';

describe('Register Component', () => {
  let component: RegisterComponent;
  let fixture: ComponentFixture<RegisterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegisterComponent],
      imports: [
        StoreModule.forRoot({
          auth: fromStore.authReducer
        }),
        RouterTestingModule,
        FormsModule,
        HttpClientTestingModule,
        FakeTranslateModule
      ],
      providers: [
        AuthService
      ]
    });

    fixture = TestBed.createComponent(RegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
