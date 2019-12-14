import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { RecordsComponent } from './records.component';
import { configureTestSuite } from 'ng-bullet';
import {FakeTranslateModule} from '../../../../test-utils/test-utils';
import {IgxGridSharedModule} from '../../../shared/ignite-ui-defaults/igx-grid-shared-module.module';
import {SharedModule} from '../../../shared/shared.module';
import {ReactiveFormsModule} from '@angular/forms';
import {combineReducers, StoreModule} from '@ngrx/store';
import * as fromStore from '../../../store';
import {AnimationBuilder} from '@angular/animations';
import {TranslateService} from '@ngx-translate/core';
import {Component, NO_ERRORS_SCHEMA} from '@angular/core';

@Component({
  template: ''
})
class DummyComponent {}

describe('RecordsComponent', () => {
  let component: RecordsComponent;
  let fixture: ComponentFixture<RecordsComponent>;

  configureTestSuite(() => {
    TestBed.configureTestingModule({
      declarations: [RecordsComponent, DummyComponent],
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
        ReactiveFormsModule,
        StoreModule.forRoot({
          records: combineReducers(fromStore.recordReducer)
        })
      ],
      providers: [AnimationBuilder, TranslateService],
      schemas: [NO_ERRORS_SCHEMA]
    });
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecordsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
