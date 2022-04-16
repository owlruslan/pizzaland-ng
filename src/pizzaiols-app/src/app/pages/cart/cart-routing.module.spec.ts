import {TestBed} from "@angular/core/testing";
import {Router} from "@angular/router";
import {RouterTestingModule} from "@angular/router/testing";

import {CartRoutingModule} from "./cart-routing.module";
import {CartComponent} from "./cart.component";


describe('CartRoutingModule', () => {
  let router: Router;

  beforeEach(async () => {
    TestBed.configureTestingModule({imports: [CartRoutingModule, RouterTestingModule]});
    router = TestBed.inject(Router);
  });

  it('should load cart page', async () => {
    expect(router.config.find(rc => rc.path === '')?.component).toEqual(CartComponent)
  });
})
