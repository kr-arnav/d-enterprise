import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appContainerLightTheme]'
})
export class ContainerLightThemeDirective {

  constructor(private e: ElementRef) {
    e.nativeElement.style.background = "#f4f4f4";
    e.nativeElement.style.color = "#000";
  }

}
