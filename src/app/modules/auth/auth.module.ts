import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {AuthRoutingModule} from './auth-routing.module';
import {AuthComponent} from '@app/modules/auth/auth.component';
import {ButtonModule} from '@app/ui/v1/button/button.module';
import {InputModule} from '@app/ui/v1/input/input.module';
import {ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [AuthComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    ButtonModule,
    InputModule,
    ReactiveFormsModule
  ],
  exports: [AuthComponent]
})
export class AuthModule {
}
