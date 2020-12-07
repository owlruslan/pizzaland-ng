import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { FormBuilder, Validators } from '@angular/forms';
import { RootStoreState, UserStoreActions } from '../../store/root';
import { UserLoginRequest } from '../../../../../core/src/lib/models';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class AuthComponent implements OnInit {
  form = this.fb.group({
    username: ['', Validators.required],
    password: ['', Validators.required],
  });

  constructor(
    private store: Store<RootStoreState.State>,
    private fb: FormBuilder,
  ) {
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    const request = new UserLoginRequest();
    this.store.dispatch(new UserStoreActions.Login({ request }));
  }
}
