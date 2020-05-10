// import {Location} from '@angular/common';
import {TestBed, fakeAsync/*, tick*/} from '@angular/core/testing';
import {RouterTestingModule} from '@angular/router/testing';
import {Router} from '@angular/router';

import {AuthComponent} from './auth.component';
import {AuthRoutingModule, routes} from './auth-routing.module';
import {AppComponent} from '../app.component';
import {AuthGuard} from './auth.guard';
import {AuthService} from './auth.service';
import {User} from './user.model';
import {MaterialModule} from '../material.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

describe('Router: AuthGuard', () => {
  // let location: Location;
  let router: Router;
  let authGuard;
  let authService;
  let fixture;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AuthComponent, AppComponent],
      imports: [AuthRoutingModule, RouterTestingModule.withRoutes(routes), MaterialModule, BrowserAnimationsModule],
      providers: [AuthService]
    });

    // location = TestBed.get(Location);
    router = TestBed.get(Router);
    authGuard = TestBed.get(AuthGuard);
    authService = TestBed.get(AuthService);

    fixture = TestBed.createComponent(AppComponent);
    router.initialNavigation();
    authService.logOut();
  });

  it('navigate to "/" takes you to /login when is not authorize', fakeAsync(() => {
    authService.logOut();
    expect(authGuard.canActivate()).toEqual(router.parseUrl('/login'));
  }));

  it('navigate to "/" doesnt take you to login page when user is authorized with the right credentials, return true', () => {
    const user = new User();
    authService.logIn(user.getLogin(), user.getPassword());
    expect(authGuard.canActivate()).toBeTrue();
  });

});
