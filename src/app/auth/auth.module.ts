import { NgModule } from '@angular/core';
import { AuthComponent } from './auth.component';
import { MaterialModule } from '../material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AuthComponent
  ],
  imports: [
    MaterialModule,
    FlexLayoutModule,
    ReactiveFormsModule
  ],
  exports: [AuthComponent]
})
export class AuthModule {}
