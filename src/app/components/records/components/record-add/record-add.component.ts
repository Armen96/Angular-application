import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Observable} from 'rxjs';
import {select, Store} from '@ngrx/store';
import {AppState} from '../../../../shared/ngrx/appState';
import {Router} from '@angular/router';
import * as fromStore from '../../../../store/record';
import {skip, take} from 'rxjs/operators';
import {NgxSpinnerService} from 'ngx-spinner';

@Component({
  selector: 'app-record-add',
  templateUrl: './record-add.component.html',
  styleUrls: ['./record-add.component.css']
})
export class RecordAddComponent {
  public newRecordForm = new FormGroup({});
  public isLoading$: Observable<boolean>;

  constructor(
    protected store: Store<AppState>,
    protected router: Router,
    protected fb: FormBuilder,
    private spinner: NgxSpinnerService
  ) {
    this.newRecordForm = this.fb.group({
      body: ['', Validators.required],
      title: [''],
      userId: [1]
    });

    this.isLoading$ = this.store.pipe(select(fromStore.getRecordsIsLoading));
  }

  public doSave(): void {
    this.spinner.show();
    const { body, title, userId } = this.newRecordForm.value;
    const record = { body, title, userId };

    this.store.dispatch(new fromStore.CreateRecord(record));
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
    this.newRecordForm.reset();
    this.router.navigate(['/records']);
  }
}
