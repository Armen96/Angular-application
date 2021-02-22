/* tslint:disable:max-line-length */
import { NgModule } from '@angular/core';
import {
  IgxAvatarModule, IgxBadgeModule,
  IgxButtonGroupModule, IgxButtonModule,
  IgxCheckboxModule, IgxChipsModule,
  IgxComboModule, IgxCsvExporterService, IgxDatePickerModule, IgxDialogModule,
  IgxDividerModule, IgxExcelExporterService, IgxExpansionPanelModule, IgxFocusModule, IgxGridModule, IgxIconModule,
  IgxInputGroupModule, IgxProgressBarModule, IgxRadioModule, IgxRippleModule,
  IgxSelectModule, IgxSliderModule, IgxSwitchModule,
  IgxToastModule, IgxToggleModule, IgxTooltipModule
} from 'igniteui-angular';
/* tslint:enable:max-line-length */

@NgModule({
  imports: [
    IgxAvatarModule,
    IgxBadgeModule,
    IgxButtonGroupModule,
    IgxButtonModule,
    IgxCheckboxModule,
    IgxChipsModule,
    IgxComboModule,
    IgxDatePickerModule,
    IgxDialogModule,
    IgxExpansionPanelModule,
    IgxFocusModule,
    IgxGridModule,
    IgxIconModule,
    IgxInputGroupModule,
    IgxProgressBarModule,
    IgxRadioModule,
    IgxRippleModule,
    IgxSelectModule,
    IgxSliderModule,
    IgxSwitchModule,
    IgxToastModule,
    IgxToggleModule,
    IgxTooltipModule,
    IgxDividerModule
  ],
  exports: [
    IgxAvatarModule,
    IgxBadgeModule,
    IgxButtonGroupModule,
    IgxButtonModule,
    IgxCheckboxModule,
    IgxChipsModule,
    IgxComboModule,
    IgxDatePickerModule,
    IgxDialogModule,
    IgxExpansionPanelModule,
    IgxFocusModule,
    IgxGridModule,
    IgxIconModule,
    IgxInputGroupModule,
    IgxProgressBarModule,
    IgxRadioModule,
    IgxRippleModule,
    IgxSelectModule,
    IgxSliderModule,
    IgxSwitchModule,
    IgxToastModule,
    IgxToggleModule,
    IgxTooltipModule,
    IgxDividerModule
  ],
  providers: [IgxCsvExporterService, IgxExcelExporterService]
})
export class IgxGridSharedModule {}
