import { Component, ElementRef, HostListener, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { SearchService } from '../../../services/search/search.service';

@Component({
  selector: 'restaurants-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss'],
})
export class SearchBarComponent implements OnInit {
  public searchForm: FormGroup = this.formBuilder.group({
    searchQuery: [''],
  });
  public isViewActive = false;
  public isSearching = false;

  public searchResults$: BehaviorSubject<any> = new BehaviorSubject([]);

  private get searchQuery(): FormControl {
    return this.searchForm.controls.searchQuery as FormControl;
  }

  @HostListener('document:click', ['$event'])
  clicked(event: { target: any }): void {
    if (!this.elementRef.nativeElement.contains(event.target)) {
      this.isViewActive = false;
    }
  }

  constructor(
    private formBuilder: FormBuilder, private elementRef: ElementRef,
    private searchService: SearchService) { }

  public search(query = ''): void {
    this.searchResults$.next([]);
    this.isSearching = true;

    this.searchService.getSearchResults(query).
      toPromise().
      then((result: any) => {
        this.isSearching = false;
        this.searchResults$.next(result);
      });

    this.searchResults$.subscribe((result: any) => {
      console.log(result);
    });
  }

  ngOnInit(): void {
    this.searchQuery.valueChanges.pipe(
      debounceTime(300),
      distinctUntilChanged(),
    ).subscribe((query: string) => this.search(query));
  }
}
