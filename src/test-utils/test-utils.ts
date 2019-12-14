import {DebugElement} from '@angular/core';
import {By} from '@angular/platform-browser';
import {TranslateFakeLoader, TranslateLoader, TranslateModule} from '@ngx-translate/core';

/* Returns the trimmed text contents of an HTML element selected by the given CSS selector */
export function findTrimmedElementText(debugElement: DebugElement, cssSelector: string): string {
  return trimElementText(debugElement.query(By.css(cssSelector)));
}

/* Returns the trimmed text contents of a debug element */
export function trimElementText(debugElement: DebugElement): string {
  return debugElement.nativeElement.textContent.trim();
}

/* Returns datatable cell CSS selector from x,y input */
export function getSelectorForElementAt(x: number, y: number): string {
  return `datatable-row-wrapper:nth-child(${y}) datatable-body-cell:nth-child(${x}) div span`;
}

/* Fake translate module to import in component tests */
export const FakeTranslateModule = TranslateModule.forRoot({
  loader: { provide: TranslateLoader, useClass: TranslateFakeLoader }
});
