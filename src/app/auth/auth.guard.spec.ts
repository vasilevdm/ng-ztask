// import {Location} from '@angular/common';
import {TestBed, fakeAsync/*, tick*/} from '@angular/core/testing';
import {RouterTestingModule} from '@angular/router/testing';
import {Router} from '@angular/router';

import {AuthComponent} from './auth.component';
import {AuthRoutingModule, routes} from './auth-routing.module';
import {AppComponent} from '../app.component';
import {AuthGuard} from './auth.guard';
import {AuthService} from './auth.service';

describe('Router: AuthGuard', () => {
  // let location: Location;
  let router: Router;
  let authGuard;
  let authService;
  let fixture;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AuthComponent, AppComponent],
      imports: [AuthRoutingModule, RouterTestingModule.withRoutes(routes)],
      providers: [AuthService]
    });

    // location = TestBed.get(Location);
    router = TestBed.get(Router);
    authGuard = TestBed.get(AuthGuard);
    authService = TestBed.get(AuthService);

    fixture = TestBed.createComponent(AppComponent);
    router.initialNavigation();
  });

  it('navigate to "/" takes you to /login when is not authorize', fakeAsync(() => {
    // storageService.isLoggedIn = true;
    // router.navigate(['']);
    // tick();
    authService.logOut();
    expect(authGuard.canActivate()).toEqual(router.parseUrl('/login'));
  }));

  it('navigate to "/" doesnt take you to login page when user is authorized, return true', () => {
    authService.logIn();
    expect(authGuard.canActivate()).toEqual(true);
  });

});
