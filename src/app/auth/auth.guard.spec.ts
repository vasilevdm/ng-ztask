// import {Location} from '@angular/common';
import {TestBed, fakeAsync/*, tick*/} from '@angular/core/testing';
import {RouterTestingModule} from '@angular/router/testing';
import {Router} from '@angular/router';

import {AuthComponent} from './auth.component';
import {AuthRoutingModule, routes} from './auth-routing.module';
import {AppComponent} from '../app.component';
import {AuthGuard} from './auth.guard';

describe('Router: AuthGuard', () => {
  // let location: Location;
  let router: Router;
  let authGuard;
  let fixture;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AuthComponent, AppComponent],
      imports: [AuthRoutingModule, RouterTestingModule.withRoutes(routes)]
    });

    // location = TestBed.get(Location);
    router = TestBed.get(Router);
    authGuard = TestBed.get(AuthGuard);

    fixture = TestBed.createComponent(AppComponent);
    router.initialNavigation();
  });

  it('navigate to "/" takes you to /login when is not authorize', fakeAsync(() => {
    // storageService.isLoggedIn = true;
    // router.navigate(['']);
    // tick();
    expect(authGuard.canActivate()).toEqual(router.parseUrl('/login'));
  }));

});
