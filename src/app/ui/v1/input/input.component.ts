import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-ui-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
})
export class InputComponent {

  @Input() placeholder = 'Input...';
  @Input() type = 'text';

  constructor() {
  }
}
