import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'restaurants-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.scss']
})
export class BreadcrumbsComponent implements OnInit {
  @Input()
  path = '';

  constructor() { }

  ngOnInit(): void {
  }

}
