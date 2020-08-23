import { Component, OnInit, Input, Output, EventEmitter, AfterViewInit } from '@angular/core';
import { Button } from '@models/btn.model';

@Component({
  selector: 'app-btn-push',
  templateUrl: './btn-push.component.html',
  styleUrls: ['./btn-push.component.scss']
})
export class BtnPushComponent implements OnInit {

  // @Desc: to define a button component
  @Input() btns: Button[];

  btnsRight: Button[] = null;
  
  constructor() { }

  ngOnInit(): void {
    if (this.btns.includes(null)) {
      this.btnsRight = this.btns.splice(this.btns.indexOf(null));
      this.btnsRight.splice(0, 1);
    }
  }

}
