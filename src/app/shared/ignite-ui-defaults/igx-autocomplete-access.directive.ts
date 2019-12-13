import { Directive, Input } from '@angular/core';
import { IgxAutocompleteDirective, IgxDropDownComponent } from 'igniteui-angular';

@Directive({
  selector: '[titanIgxAutocompleteControl]',
  exportAs: 'titanAutocompleteControl'
})
export class TitanIgxAutocompleteControlDirective extends IgxAutocompleteDirective {
  /* tslint:disable-next-line:no-input-rename */
  @Input('titanIgxAutocompleteControl') target: IgxDropDownComponent;
}
