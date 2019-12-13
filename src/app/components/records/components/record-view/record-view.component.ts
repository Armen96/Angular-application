import { Component } from '@angular/core';
import {Observable} from 'rxjs';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {select, Store} from '@ngrx/store';
import {AppState} from '../../../../shared/ngrx/appState';
import {ActivatedRoute, Router} from '@angular/router';
import {skip, take, takeUntil} from 'rxjs/operators';
import {UnsubscriptionHandler} from '../../../../shared/unsubscription-handler/unsubscription-handler';
import * as fromStore from '../../../../store/record';
import {NgxSpinnerService} from 'ngx-spinner';

@Component({
  selector: 'app-record-view',
  templateUrl: './record-view.component.html',
  styleUrls: ['./record-view.component.css']
})
export class RecordViewComponent extends UnsubscriptionHandler {
  public recordForm = new FormGroup({});
  public isLoading$: Observable<boolean>;

  constructor(
    protected store: Store<AppState>,
    protected router: Router,
    protected route: ActivatedRoute,
    protected fb: FormBuilder,
    private spinner: NgxSpinnerService
  ) {
    super();
    this.initForm();

    this.route.paramMap.pipe(takeUntil(this.unsubscribe$)).subscribe(params => {
      console.log(+params.get('id'));
      this.store.dispatch(new fromStore.LoadRecordById(+params.get('id')));
    });
    this.store.dispatch(new fromStore.LoadRecordByIdSuccess(null));

    this.store
      .pipe(select(fromStore.getRecordsIsLoaded), takeUntil(this.unsubscribe$))
      .subscribe(isLoaded => {
        if (isLoaded) {
          this.store.pipe(select(fromStore.getRecord), skip(1), take(1)).subscribe( record => {
            this.resetForm(record);
          });
        }
      });
    this.isLoading$ = this.store.pipe(select(fromStore.getRecordsIsLoading));
  }

  public doSave(): void {
    this.spinner.show();
    const record = this.recordForm.value;
    this.store.dispatch(new fromStore.UpdateRecord(record));
    this.store.pipe(select(fromStore.getRecordsIsLoaded), skip(1), take(1)).subscribe(saved => {
      if (saved) {
        setTimeout(() => {
          this.spinner.hide();
        }, 1500);
        setTimeout(() => {
          this.router.navigate(['/records']);
        }, 1800);
      }
    });
  }

  public doCancel(): void {
    this.store.pipe(select(fromStore.getRecord), takeUntil(this.unsubscribe$)).subscribe(data => {
      this.resetForm(data);
    });
  }

  protected initForm(): void {
    this.recordForm = this.fb.group({
      id: [null],
      userId: [1],
      body: ['', Validators.required],
      title: ['']
    });
  }

  protected resetForm(record): void {
    if (!record) {
      this.recordForm.reset();
    } else {
      const { body, title, id, userId } = record;
      this.recordForm.reset({ body, title, id, userId });
    }
  }
}
