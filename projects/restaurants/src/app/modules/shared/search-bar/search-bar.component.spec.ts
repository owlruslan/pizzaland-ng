import { async, ComponentFixture, fakeAsync, TestBed, tick, waitForAsync } from '@angular/core/testing';

import { SearchBarComponent } from './search-bar.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { SearchService } from '../../../services/search/search.service';
import { SearchMockService } from '../../../services/search/search-mock.service';

describe('SearchBarComponent', () => {
  let component: SearchBarComponent;
  let fixture: ComponentFixture<SearchBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SearchBarComponent],
      imports: [
        ReactiveFormsModule,
        HttpClientTestingModule
      ],
      providers: [
        {provide: SearchService, useClass: SearchMockService}
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchBarComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  /**
   * TODO: Jasmine marbles tests, first state searchResults = [], after = [3 items...]
   */
  xdescribe('#search', () => {
    it('should set searchResults$ data from response', waitForAsync(() => {
      component.search('');
      component.searchResults$.subscribe(value => {
        console.log(value);
        expect(value.length).toEqual(3);
      });
    }));
  });
});
