import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthComponent } from './auth.component';
import {ReactiveFormsModule, FormBuilder} from '@angular/forms';
import {AppModule} from '../app.module';
import {AuthModule} from './auth.module';
import {log} from 'util';

describe('AuthComponent', () => {
  let component: AuthComponent;
  let fixture: ComponentFixture<AuthComponent>;

  // const formBuilder: FormBuilder = new FormBuilder();

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthComponent ],
      imports: [
        ReactiveFormsModule,
        AppModule,
        AuthModule
      ],
      providers: [
        // { provide: FormBuilder, useValue: formBuilder }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthComponent);
    component = fixture.componentInstance;

    // component.loginForm = formBuilder.group({
    //   login: null,
    //   lastName: null
    // });
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render form', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('form')).toBeTruthy();
  });

  it('should render login and password fields', () => {
    const compiled = fixture.debugElement.nativeElement;
    const loginInput = compiled.querySelector('input[id="authLogin"]');
    const passInput = compiled.querySelector('input[id="authPassword"]');

    expect(loginInput).toBeTruthy();
    expect(passInput).toBeTruthy();
  });

  it('should test form validity, login and pass are set', () => {
    const form = component.loginForm;
    expect(form.valid).toBeFalsy();

    const loginInput = form.controls.login;
    loginInput.setValue('admin');
    expect(form.valid).toBeFalsy();

    const passInput = form.controls.password;
    passInput.setValue('test password');

    expect(form.valid).toBeTruthy();
  });

  it('should test input validity', () => {
    const loginInput = component.loginForm.controls.login;
    const passInput = component.loginForm.controls.password;

    expect(loginInput.valid).toBeFalsy();
    expect(passInput.valid).toBeFalsy();

    loginInput.setValue('admin');
    expect(loginInput.valid).toBeTruthy();

    passInput.setValue('test password');
    expect(passInput.valid).toBeTruthy();
  });

  it('should test input errors', () => {
    // login
    const loginInput = component.loginForm.controls.login;
    expect(loginInput.errors.required).toBeTruthy();

    loginInput.setValue('admin');
    expect(loginInput.errors).toBeNull();
    // password
    const passInput = component.loginForm.controls.password;
    expect(passInput.errors.required).toBeTruthy();

    passInput.setValue('test password');
    expect(passInput.errors).toBeNull();
  });
});
