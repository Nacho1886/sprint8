import { NgModule } from '@angular/core';

import { EmailLoginErrorPipe } from './login/email-login-error.pipe';
import { PasswordLoginErrorPipe } from './login/password-login-error.pipe';
import { NameRegisterErrorPipe } from './register/name-register-error.pipe';
import { PasswordRegisterErrorPipe } from './register/password-register-error.pipe';

@NgModule({
  declarations: [
    PasswordLoginErrorPipe,
    PasswordRegisterErrorPipe,
    EmailLoginErrorPipe,
    NameRegisterErrorPipe
  ],
  exports: [
    PasswordLoginErrorPipe,
    PasswordRegisterErrorPipe,
    EmailLoginErrorPipe,
    NameRegisterErrorPipe
  ],
})
export class PipesAuthModule {}
