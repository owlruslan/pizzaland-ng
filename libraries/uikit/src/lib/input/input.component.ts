import { Component, Input } from '@angular/core';

@Component({
  selector: 'lib-ui-v1-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
})
export class InputComponent {
  @Input() placeholder = 'Input...';
  @Input() type = 'text';

  constructor() {
  }
}
