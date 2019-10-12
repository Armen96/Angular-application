import { Injectable } from '@angular/core';

import { Resolve } from '@angular/router';

import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';


@Injectable()
export class DelayResolver implements Resolve<Observable<string>> {
  constructor() {}

  resolve() {
    return of('Hello Alligator!').pipe(
      delay(100)
    );
  }
}
