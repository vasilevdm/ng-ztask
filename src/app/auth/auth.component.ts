import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthService} from './auth.service';
import {SnackbarService} from '../shared/snackbar.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  loginForm: FormGroup;

  constructor(private authService: AuthService, private snackBar: SnackbarService) {
  }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      login: new FormControl('', {
        validators: [Validators.required ]
      }),
      password: new FormControl('', {
        validators: [Validators.required]
      })
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      const login = this.loginForm.value.login;
      const password = this.loginForm.value.password;
      this.authService.logIn(login, password);
    } else {
      this.snackBar.open('Form is not valid');
    }
  }

}
