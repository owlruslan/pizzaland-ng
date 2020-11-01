import { Component, OnInit } from '@angular/core'
import { FormBuilder, FormControl, FormGroup } from '@angular/forms'

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss'],
})
export class SearchBarComponent implements OnInit {

  public searchForm: FormGroup

  private get searchQuery(): FormControl {
    return this.searchForm.controls.searchQuery as FormControl;
  }

  constructor (private formBuilder: FormBuilder) { }

  ngOnInit (): void {
    this.searchForm = this.formBuilder.group({
      searchQuery: [''],
    })
  }

}
