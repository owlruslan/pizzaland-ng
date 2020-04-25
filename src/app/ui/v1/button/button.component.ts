import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-ui-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent {

  @Input()
  title = 'Button';

  constructor() {
  }
}
