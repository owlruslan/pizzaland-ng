import {Component, OnInit} from '@angular/core';
import {RootStoreState, UserStoreActions} from '@app/store/root';
import {Store} from '@ngrx/store';
import {UserLoginRequest} from '@app/models/user/user-login-request.model';
import {FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
  form = this.fb.group({
    username: ['', Validators.required],
    password: ['', Validators.required]
  });

  constructor(
    private store: Store<RootStoreState.State>,
    private fb: FormBuilder
  ) {
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    const request = new UserLoginRequest();
    this.store.dispatch(new UserStoreActions.Login({request}));
  }
}
