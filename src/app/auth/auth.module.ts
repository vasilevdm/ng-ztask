import { NgModule } from '@angular/core';
import { AuthComponent } from './auth.component';
import { MaterialModule } from '../material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthRoutingModule } from './auth-routing.module';

@NgModule({
  declarations: [
    AuthComponent
  ],
  imports: [
    MaterialModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    AuthRoutingModule
  ],
  exports: [AuthComponent]
})
export class AuthModule {}
