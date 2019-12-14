import { Actions } from '@ngrx/effects';
import { empty, Observable } from 'rxjs';

export class TestActions extends Actions {
    constructor() {
        super(empty());
    }

    set stream(source: Observable<any>) {
        this.source = source;
    }
}

export function getActions() {
    return new TestActions();
}
