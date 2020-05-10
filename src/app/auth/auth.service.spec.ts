import {getTestBed, TestBed} from '@angular/core/testing';
import {AuthService} from './auth.service';
import {MaterialModule} from '../material.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {RouterTestingModule} from '@angular/router/testing';

describe('Auth service', () => {
  let injector: TestBed;
  let service: AuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [MaterialModule, BrowserAnimationsModule, RouterTestingModule],
      providers: [AuthService]
    });

    injector = getTestBed();
    service = injector.get(AuthService);
    service.logOut();
  });

  it('should define isLoggedIn to return loggedIn property', () => {
    expect(service.isLoggedIn).toBeDefined();
  });

  it('should login using logIn method with the right credentials', () => {
    const login = 'admin';
    const password = 'Tambov6966';

    service.logIn(login, password);
    expect(service.isLoggedIn()).toBeTrue();
  });

  it('shouldn`t login using logIn method and wrong credentials', () => {
    const login = 'fakeLogin';
    const password = 'fakePassword';

    service.logIn(login, password);
    expect(service.isLoggedIn()).toBeFalse();
  });

  it('should logout using logOut method', () => {
    const login = 'admin';
    const password = 'Tambov6966';

    service.logIn(login, password);
    service.logOut();

    expect(service.isLoggedIn()).toBeFalse();
  });
});
