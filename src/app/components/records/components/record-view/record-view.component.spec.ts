import { AnimationBuilder } from '@angular/animations';
import { Component, NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import {ReactiveFormsModule} from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { combineReducers, select, Store, StoreModule } from '@ngrx/store';
import { TranslateService } from '@ngx-translate/core';
import { configureTestSuite } from 'ng-bullet';
import { skip, take } from 'rxjs/operators';

import { RecordViewComponent } from './record-view.component';
import {FakeTranslateModule} from '../../../../../test-utils/test-utils';
import {AppState} from '../../../../shared/ngrx/appState';
import {IgxGridSharedModule} from '../../../../shared/ignite-ui-defaults/igx-grid-shared-module.module';
import {SharedModule} from '../../../../shared/shared.module';
import * as fromStore from '../../../../store';

@Component({
  template: ''
})
class DummyComponent {}

describe('RecordViewComponent', () => {
  let component: RecordViewComponent;
  let fixture: ComponentFixture<RecordViewComponent>;
  let store: Store<AppState>;

  configureTestSuite(() => {
    TestBed.configureTestingModule({
      declarations: [RecordViewComponent, DummyComponent],
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
    store = TestBed.get(Store);
    spyOn(store, 'dispatch').and.callThrough();

    fixture = TestBed.createComponent(RecordViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('constructor', () => {
    it('should dispatch LoadRecordById', () => {
      const action = new fromStore.LoadRecordById(0);
      expect(store.dispatch).toHaveBeenCalledWith(action);
    });
  });

  describe('doSave', () => {
    it('should dispatch UpdateRecord', () => {
      component.recordForm.setValue({
        id: 1,
        userId: 1,
        body: 'test',
        title: 'test'
      });
      component.doSave();
      const action = new fromStore.UpdateRecord({
        id: 1,
        userId: 1,
        body: 'test',
        title: 'test'
      });
      expect(store.dispatch).toHaveBeenCalledWith(action);
    });
  });

  describe('doCancel', () => {
    it('should reset form properly', () => {
      store.dispatch(
        new fromStore.LoadRecordByIdSuccess({
          id: 99999,
          userId: 1,
          body: 'test',
          title: 'test'
        })
      );
      store.pipe(select(fromStore.getRecordsIsLoaded), skip(1), take(1)).subscribe(data => {
        component.doCancel();
        expect(component.recordForm.value).toEqual({
          id: 99999,
          userId: 1,
          body: 'test',
          title: 'test'
        });
      });
    });
  });
});
