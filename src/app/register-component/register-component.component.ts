// register-component.component.ts

import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../user.service';
import { SignUpClass } from '../module/Signup_Entity';

@Component({
  selector: 'app-register-component',
  templateUrl: './register-component.component.html',
  styleUrls: ['./register-component.component.css']
})
export class RegisterComponentComponent {
  fname: FormControl;
  lname: FormControl;
  phone: FormControl;
  email: FormControl;
  signUp: FormGroup;

  constructor(private userService: UserService, private fb: FormBuilder) {
    this.fname = new FormControl('', [Validators.required, Validators.maxLength(20)]);
    this.lname = new FormControl('', [Validators.required, Validators.maxLength(20)]);
    this.phone = new FormControl('', [Validators.required, Validators.pattern("^[9876][0-9]{9}$")]);
    this.email = new FormControl('', [Validators.required, Validators.pattern("^[a-z0-9_]+@[a-z]+\\.(com|in|org)$")]);

    this.signUp = new FormGroup({
      fname: this.fname,
      lname: this.lname,
      phone: this.phone,
      email: this.email
    });
  }

  successMessage=false;
  onSubmit() {
    console.log(this.signUp.value);
    if (this.signUp.valid) {
      const userData = this.signUp.value as SignUpClass;
      this.successMessage=true
      this.userService.registerUser(userData).subscribe(
        response => {
          // Handle successful response
          console.log('User registered successfully:', response);

          // Optionally, you can reset the form after successful submission
          this.signUp.reset();
        },
        error => {
          // Handle error
          console.error('Error registering user:', error);
        }
      );
    }
  }
}
