import { NgModule } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { MaterialModule } from '../material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthRoutingModule } from './auth-routing.module';

@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    MaterialModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    AuthRoutingModule
  ],
  exports: [LoginComponent]
})
export class AuthModule {}
