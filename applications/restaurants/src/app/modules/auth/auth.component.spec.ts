import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthComponent } from './auth.component';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { UserStoreActions } from '../../store/root';
import { UserLoginRequest } from '../../../../../../dist/core/lib/models';


describe('app.modules.auth.AuthComponent', () => {
  let component: AuthComponent;
  let fixture: ComponentFixture<AuthComponent>;

  let mockStore: MockStore;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AuthComponent],
      imports: [
        ReactiveFormsModule,
      ],
      providers: [
        provideMockStore(),
      ],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA,
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthComponent);

    mockStore = TestBed.inject(MockStore);

    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  afterEach(() => {
    if (fixture.nativeElement && 'remove' in fixture.nativeElement) {
      (fixture.nativeElement as HTMLElement).remove();
    }
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('#onSubmit', () => {
    it('should login', () => {
      const dispatchSpy = spyOn(mockStore, 'dispatch');
      const request = new UserLoginRequest();
      component.onSubmit();
      expect(dispatchSpy).toHaveBeenCalledWith(new UserStoreActions.Login({ request }));
    });
  });
});
