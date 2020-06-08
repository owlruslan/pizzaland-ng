import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HttpClientInMemoryWebApiModule} from 'angular-in-memory-web-api';
import {AppInMemoryWebAPIService} from '@app/in-memory-web-api/services/app.in-memory-web-api.service';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientInMemoryWebApiModule.forRoot(
      AppInMemoryWebAPIService, {
        delay: 1000,
        dataEncapsulation: true,
        apiBase: '/api/v1',
        host: 'localhost',
      }
    )
  ]
})
export class InMemoryWebApiModule {
}
