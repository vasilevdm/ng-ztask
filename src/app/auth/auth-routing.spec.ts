import {Location} from '@angular/common';
import {TestBed, fakeAsync, tick} from '@angular/core/testing';
import {RouterTestingModule} from '@angular/router/testing';
import {Router} from '@angular/router';

import {LoginComponent} from './login/login.component';
import {AuthRoutingModule, routes} from './auth-routing.module';
import {AppComponent} from '../app.component';
import {MaterialModule} from '../material.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

describe('Router: Auth', () => {
  let location: Location;
  let router: Router;
  let fixture;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoginComponent, AppComponent],
      imports: [AuthRoutingModule, RouterTestingModule.withRoutes(routes), MaterialModule, BrowserAnimationsModule]
    });

    location = TestBed.get(Location);
    router = TestBed.get(Router);

    fixture = TestBed.createComponent(AppComponent);
    router.initialNavigation();
  });

  it('navigate to "login" takes you to /login', fakeAsync(() => {
    router.navigate(['login']);
    tick();
    expect(location.path()).toBe('/login');
  }));

});
