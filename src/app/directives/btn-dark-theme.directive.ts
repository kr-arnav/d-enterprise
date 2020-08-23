import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appBtnDarkTheme]'
})
export class BtnDarkThemeDirective {

  constructor(private e: ElementRef) {
    e.nativeElement.style.background = "#313d4b";
    e.nativeElement.style.color = "#fff";
  }

}
