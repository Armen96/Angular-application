import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { IgxToastComponent, IgxToastPosition } from 'igniteui-angular';
import { take } from 'rxjs/operators';

@Injectable()
export class UiToastService {
  private _uiToast: IgxToastComponent;

  constructor(protected translateService: TranslateService) {}

  public setToastComponent(igxToast: IgxToastComponent): void {
    this._uiToast = igxToast;
  }

  public showMessage(
    message: string,
    displayTime: number = 5000,
    location: IgxToastPosition = IgxToastPosition.Middle
  ): void {
    if (!this._uiToast) {
      return;
    }
    this.translateService
      .get(message)
      .pipe(take(1))
      .subscribe(translatedMessage => {
        this._uiToast.message = translatedMessage;
        this._uiToast.displayTime = displayTime;
        this._uiToast.position = location;
        this._uiToast.show();
      });
  }

  public hideMessage(): void {
    if (!this._uiToast) {
      return;
    }
    this._uiToast.hide();
  }
}
