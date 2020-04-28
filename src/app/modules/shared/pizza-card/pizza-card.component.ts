import { Component, OnInit } from '@angular/core';
import {ButtonType} from '@app/ui/v1/button/button.component';

@Component({
  selector: 'app-pizza-card',
  templateUrl: './pizza-card.component.html',
  styleUrls: ['./pizza-card.component.scss'],
})
export class PizzaCardComponent implements OnInit {
  readonly buttonType = ButtonType.SUCCESS;

  constructor() { }

  ngOnInit(): void {
  }

}
