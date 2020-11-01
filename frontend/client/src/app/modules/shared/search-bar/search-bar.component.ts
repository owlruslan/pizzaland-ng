import { Component, ElementRef, HostListener, OnInit } from '@angular/core'
import { FormBuilder, FormControl, FormGroup } from '@angular/forms'
import { SearchService } from '@app/services/search/search.service'

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss'],
})
export class SearchBarComponent implements OnInit {

  public searchForm: FormGroup
  public isViewActive = false

  private get searchQuery (): FormControl {
    return this.searchForm.controls.searchQuery as FormControl
  }

  @HostListener('document:click', ['$event'])
  clicked (event) {
    if (!this.elementRef.nativeElement.contains(event.target)) {
      this.isViewActive = false
    }
  }

  constructor (
    private formBuilder: FormBuilder, private elementRef: ElementRef,
    private searchService: SearchService) { }

  ngOnInit (): void {
    this.searchForm = this.formBuilder.group({
      searchQuery: [''],
    })
  }

}
