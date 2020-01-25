import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { configureTestSuite } from 'ng-bullet';
import {ReactiveFormsModule} from '@angular/forms';
import {combineReducers, StoreModule} from '@ngrx/store';
import * as fromStore from '../../../../store';
import {AnimationBuilder} from '@angular/animations';
import {TranslateService} from '@ngx-translate/core';
import {Component, NO_ERRORS_SCHEMA} from '@angular/core';
import {RecordAddComponent} from './record-add.component';
import {FakeTranslateModule} from '../../../../../test-utils/test-utils';
import {IgxGridSharedModule} from '../../../../shared/ignite-ui-defaults/igx-grid-shared-module.module';
import {SharedModule} from '../../../../shared/shared.module';
import {AuthService} from '../../../../services';
import {HttpClient, HttpClientModule} from '@angular/common/http';

@Component({
  template: ''
})
class DummyComponent {}

describe('RecordAddComponent', () => {
  let component: RecordAddComponent;
  let fixture: ComponentFixture<RecordAddComponent>;

  configureTestSuite(() => {
    TestBed.configureTestingModule({
      declarations: [RecordAddComponent, DummyComponent],
      imports: [
        FakeTranslateModule,
        RouterTestingModule.withRoutes([
          {
            path: '**',
            component: DummyComponent
          }
        ]),
        IgxGridSharedModule,
        SharedModule,
        HttpClientModule,
        ReactiveFormsModule,
        StoreModule.forRoot({
          records: combineReducers(fromStore.recordReducer)
        })
      ],
      providers: [AnimationBuilder, TranslateService, AuthService],
      schemas: [NO_ERRORS_SCHEMA]
    });
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecordAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
