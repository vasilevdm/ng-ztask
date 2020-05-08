import {getTestBed, TestBed} from '@angular/core/testing';
import {AuthService} from './auth.service';

describe('Auth service', () => {
  let injector: TestBed;
  let service: AuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthService]
    });

    injector = getTestBed();
    service = injector.get(AuthService);
    service.logOut();
  });

  // afterEach(() => {
    // service.logOut();
  // });

  it('should define isLoggedIn to return loggedIn property', () => {
    expect(service.isLoggedIn).toBeDefined();
  });

  it('should login using logIn method', () => {
    service.logIn();
    expect(service.isLoggedIn()).toBeTrue();
  });

  it('should logout using logOut method', () => {
    service.logIn();
    service.logOut();
    expect(service.isLoggedIn()).toBeFalse();
  });
});
