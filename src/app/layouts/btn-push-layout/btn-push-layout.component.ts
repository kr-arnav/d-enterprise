import { Component, Input } from '@angular/core';

import { Button } from '@models/btn.model';
import { NavigatorService } from '@services/navigator.service';

@Component({
  selector: 'app-btn-push-layout',
  templateUrl: './btn-push-layout.component.html',
  styleUrls: ['./btn-push-layout.component.scss']
})
export class BtnPushLayoutComponent {

  @Input() btn: Button;
  constructor(
    private navigator: NavigatorService
  ) { }

}
