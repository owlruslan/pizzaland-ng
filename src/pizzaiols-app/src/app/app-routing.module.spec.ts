import {TestBed} from "@angular/core/testing";
import {Route, Router} from "@angular/router";
import {RouterTestingModule} from "@angular/router/testing";
import {AppRoutingModule} from "./app-routing.module";
import {RestaurantsModule} from "./pages/restaurants/restaurants.module";

describe('AppRoutingModule', () => {
  let router: Router;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      imports: [AppRoutingModule, RouterTestingModule]
    });

    router = TestBed.inject(Router);
  });

  describe(`route 'restaurants'`, () => {
    it('should load specific module', async () => {
      // locate the route config you are after
      // could be in the main config or in children or children of children
      const route: Route | undefined = router.config[0].children?.find(rc => rc.path === 'restaurants');

      if (typeof route?.loadChildren === 'function') {
        expect(await route.loadChildren()).toEqual(RestaurantsModule)
      }
    });
  });
})
