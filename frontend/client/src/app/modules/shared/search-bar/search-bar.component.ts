import { Component, ElementRef, HostListener, OnInit } from '@angular/core'
import { FormBuilder, FormControl, FormGroup } from '@angular/forms'
import { SearchService } from '@app/services/search/search.service'
import { BehaviorSubject } from 'rxjs'
import { debounceTime, distinctUntilChanged } from 'rxjs/operators'

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss'],
})
export class SearchBarComponent implements OnInit {

  public searchForm: FormGroup
  public isViewActive = false
  public isSearching = false

  public searchResults$ = new BehaviorSubject([])

  private get searchQuery(): FormControl {
    return this.searchForm.controls.searchQuery as FormControl
  }

  @HostListener('document:click', ['$event'])
  clicked(event) {
    if (!this.elementRef.nativeElement.contains(event.target)) {
      this.isViewActive = false
    }
  }

  constructor(
    private formBuilder: FormBuilder, private elementRef: ElementRef,
    private searchService: SearchService) { }

  public search(query = ''): void {
    this.searchResults$.next([])
    this.isSearching = true

    this.searchService.getSearchResults(query).toPromise().then(result => {
      this.isSearching = false
      this.searchResults$.next(result.data)
    })
  }

  ngOnInit(): void {
    this.searchForm = this.formBuilder.group({
      searchQuery: [''],
    })

    this.searchQuery.valueChanges.pipe(
      debounceTime(300),
      distinctUntilChanged(),
    )
      .subscribe(
        (query: string) => this.search(query))
  }
}
