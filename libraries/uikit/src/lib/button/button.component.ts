import { Component, Input } from '@angular/core';

export enum ButtonType {
  DEFAULT = 'default',
  SUCCESS = 'success',
}

@Component({
  selector: 'uikit-ui-v1-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent {
  readonly types = ButtonType;

  @Input() title = 'Button';
  @Input() type = this.types.DEFAULT;

  constructor() {
  }
}
