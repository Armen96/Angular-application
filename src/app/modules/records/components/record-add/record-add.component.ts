import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Observable} from 'rxjs';
import {select, Store} from '@ngrx/store';
import {AppState} from '../../../../shared/ngrx/appState';
import {Router} from '@angular/router';
import * as fromStore from '../../../../store/record';
import {NgxSpinnerService} from 'ngx-spinner';
import {AuthService} from '../../../../services';
import * as moment from 'moment';
import {skip, take} from 'rxjs/operators';

@Component({
  selector: 'app-record-add',
  templateUrl: './record-add.component.html',
  styleUrls: ['./record-add.component.css']
})
export class RecordAddComponent {
  public newRecordForm = new FormGroup({});
  public isLoading$: Observable<boolean>;

  public user = {
    dateTime: new Date(),
    email: undefined,
    fullName: undefined,
    genres: undefined,
    movie: undefined,
    phone: undefined
  };

  public genres = [
    { type: "Action" , movies: ["The Matrix", "Kill Bill: Vol.1", "The Dark Knight Rises"]},
    { type: "Adventure" , movies: ["Interstellar", "Inglourious Basterds", "Inception"]},
    // tslint:disable-next-line:object-literal-sort-keys
    { type: "Comedy" , movies: ["Wild Tales", "In Bruges", "Three Billboards Outside Ebbing, Missouri",
        "Untouchable", "3 idiots"]},
    { type: "Crime" , movies: ["Training Day", "Heat", "American Gangster"]},
    { type: "Drama" , movies: ["Fight Club", "A Beautiful Mind", "Good Will Hunting", "City of God"]},
    { type: "Biography" , movies: ["Amadeus", "Bohemian Rhapsody"]},
    { type: "Mystery" , movies: ["The Prestige", "Memento", "Cloud Atlas"]},
    { type: "Musical" , movies: ["All That Jazz"]},
    { type: "Romance" , movies: ["Love Actually", "In The Mood for Love"]},
    { type: "Sci-Fi" , movies: ["The Fifth Element"]},
    { type: "Thriller" , movies: ["The Usual Suspects"]},
    { type: "Western" , movies: ["Django Unchained"]}];

  constructor(
    protected store: Store<AppState>,
    protected router: Router,
    protected fb: FormBuilder,
    private spinner: NgxSpinnerService,
    protected authService: AuthService
  ) {
    const user = authService.getUser();
    this.newRecordForm = this.fb.group({
      week: ['', Validators.required],
      income: [22500, Validators.required],
      outcome: [22500, Validators.required],
      start_date: ['', Validators.required],
      end_date: ['', Validators.required],
      description: ['Normal week'],
      user_id: [user['_id']]
    });

    this.isLoading$ = this.store.pipe(select(fromStore.getRecordsIsLoading));
  }

  public doSave(): void {
    this.spinner.show();
    const record = this.newRecordForm.value;
    record.start_date = moment(record.start_date).format('YYYY-MM-DD');
    record.end_date = moment(record.end_date).format('YYYY-MM-DD');

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



  public onDateSelection(value) {
    this.user.dateTime.setDate((value as Date).getDate());
  }

  public onTimeSelection(event) {
    this.user.dateTime.setTime((event.newValue as Date).getTime());
  }
}
