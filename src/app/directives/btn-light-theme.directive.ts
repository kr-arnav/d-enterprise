import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appBtnLightTheme]'
})
export class BtnLightThemeDirective {

  constructor(private e: ElementRef) {
    e.nativeElement.style.background = "#fff";
    e.nativeElement.style.color = "#313d4b";
  }

}
