import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ErrorMessageComponent} from './error-message.component';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {NO_ERRORS_SCHEMA} from '@angular/core';
import {of} from 'rxjs';

describe('app.ui.v1.error-message.ErrorMessageComponent', () => {
  let component: ErrorMessageComponent;
  let fixture: ComponentFixture<ErrorMessageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ErrorMessageComponent],
      imports: [
        NoopAnimationsModule,
      ],
      providers: [
        NoopAnimationsModule,
      ],
      schemas: [NO_ERRORS_SCHEMA]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ErrorMessageComponent);
    component = fixture.componentInstance;
    component.errorResponse$ = of(null);
    fixture.detectChanges();
  });

  afterAll(() => {
    if (fixture.nativeElement && 'remove' in fixture.nativeElement) {
      (fixture.nativeElement as HTMLElement).remove();
    }
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe(`#ngOnInit`, () => {
    it(`should emit next of errorSubject$`, () => {
      const subjSpy = spyOn(component.errorSubject$, 'next').and.stub();
      const err = {
        success: false,
        error: 'string',
      };
      component.errorResponse$ = of(err);
      component.ngOnInit();

      expect(subjSpy).toHaveBeenCalledWith(err);
    });
  });

  describe(`#ngOnDestroy`, () => {
    it(`should emit next of unsubscribe`, () => {
      const unsubSpy = spyOn(component.unsubscribe, 'next').and.stub();
      component.ngOnDestroy();
      expect(unsubSpy).toHaveBeenCalled();
    });
  });

  describe(`#onExpandClick`, () => {
    it(`should toggle expanded prop`, () => {
      const value = true;

      component.expanded = value;
      component.onExpandClick();

      expect(component.expanded).toBe(!value);

      component.expanded = !value;
      component.onExpandClick();

      expect(component.expanded).toBe(value);
    });
  });

  describe(`#onCloseClick`, () => {
    it(`should toggle hidden prop`, () => {
      const value = true;

      component.hidden = value;
      component.onCloseClick();

      expect(component.hidden).toBe(!value);

      component.hidden = !value;
      component.onCloseClick();

      expect(component.hidden).toBe(value);
    });
  });
});
