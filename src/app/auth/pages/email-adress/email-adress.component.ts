import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-email-adress',
  templateUrl: './email-adress.component.html',
  styleUrls: ['./email-adress.component.scss']
})
export class EmailAdressComponent implements OnInit {

  userForm: FormGroup
  

  showPasswordMessage: boolean = false

  constructor(
    private router: Router,
    private authService: AuthService
  ) {
    
    this.userForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.pattern(this.authService.emailPattern)])
    })
  }
  ngOnInit(): void {
    this.userForm.get('email')?.valueChanges.subscribe(value => {
      if (value !== value.toLowerCase().trim()) this.userForm.get('email')?.setValue(value.toLowerCase().trim())
    })
  }

  isInvalidEmail(): ValidationErrors | null {
    return this.userForm.get('email')?.touched ? this.userForm.controls['email'].errors : null
  }

  validateUserId() {
    const email = this.userForm.get('email')!
    if (!this.userForm.controls['email'].errors) this.authService.validateExistEmail(email.value)
    .subscribe(emailExist => emailExist
      ? this.router.navigate(['/auth/login'])
      : this.router.navigate(['/auth/register']))
    email.markAsTouched()
  }
}