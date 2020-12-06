import { moduleMetadata, storiesOf } from '@storybook/angular';
import { RouterTestingModule } from '@angular/router/testing';
import { provideMockStore } from '@ngrx/store/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PizzasComponent } from '@app/modules/pizzas/pizzas.component';
import { PizzasModule } from '@app/modules/pizzas/pizzas.module';

storiesOf('app.modules.pizzas.PizzasComponent', module).addDecorator(
  moduleMetadata({
    imports: [
      RouterTestingModule,
      BrowserAnimationsModule,
      PizzasModule,
    ],
    providers: [
      provideMockStore(),
    ],
  }),
).add('default', () => {
  return {
    component: PizzasComponent,
  };
});
