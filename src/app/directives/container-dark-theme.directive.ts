import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appContainerDarkTheme]'
})
export class ContainerDarkThemeDirective {

  constructor(private e: ElementRef) {
    e.nativeElement.style.background = "#313d4b";
    e.nativeElement.style.color = "#fff";
  }

}
