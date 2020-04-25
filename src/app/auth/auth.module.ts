import { NgModule } from '@angular/core';
import { AuthComponent } from './auth.component';
import { MaterialModule } from '../material.module';

@NgModule({
  declarations: [
    AuthComponent
  ],
  imports: [
    MaterialModule
  ],
  exports: [AuthComponent]
})
export class AuthModule {}
