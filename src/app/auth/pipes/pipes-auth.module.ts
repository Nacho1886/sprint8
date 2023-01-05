import { NgModule } from '@angular/core';

import { PasswordLoginErrorPipe } from './login/password-login-error.pipe';
import { NameRegisterErrorPipe } from './register/name-register-error.pipe';
import { PasswordRegisterErrorPipe } from './register/password-register-error.pipe';
import { EmailErrorPipe } from './email-adress/email-error.pipe';

@NgModule({
  declarations: [
    PasswordLoginErrorPipe,
    PasswordRegisterErrorPipe,
    EmailErrorPipe,
    NameRegisterErrorPipe
  ],
  exports: [
    PasswordLoginErrorPipe,
    PasswordRegisterErrorPipe,
    EmailErrorPipe,
    NameRegisterErrorPipe
  ],
})
export class PipesAuthModule {}
