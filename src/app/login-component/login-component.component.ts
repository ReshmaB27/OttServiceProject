import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.css']
})
export class LoginComponentComponent {

  phone: FormControl;
  logIn: FormGroup;
  var1 = false;

  constructor(private userService: UserService, private fb: FormBuilder, private router: Router) {
    this.phone = new FormControl('', [Validators.required, Validators.pattern("^[9876][0-9]{9}$")]);

    this.logIn = new FormGroup({
      phone: this.phone,
    });
  }

  error: string = '';
  phoneNumber: string = '';

  checkPhoneNumber() {
    if (this.phoneNumber === '7200017483') {
      // Redirect to the admin page or perform any admin-specific action
      console.log('Redirecting to admin page...');
      // You may use Angular Router to navigate to the admin page
      // For example, if you have a route named '/admin', you can do:
      this.router.navigate(['/admin']);
      return;
    }
  
    this.userService.checkPhoneNumber(this.phoneNumber).subscribe(
      (response) => {
        console.log('Response from the server:', response); // Log the entire response
  
        if (response.status === 'available') {
          this.var1 = true;
  
          // Log the user data before storing it in session
          if (response.userData) {
            console.log('User data before setting in session:', response.userData);
            this.userService.setUserDataInSession(response.userData);
  
            // Call generateOTP after setting user data in session
            this.generateOTP();
          } else {
            console.error('Invalid user data received:', response.userData);
            this.error = 'Error: Invalid user data received.';
          }
  
        } else {
          this.var1 = false;
          console.log('Phone number not registered. Redirect to registration.');
          this.error = 'Phone number not registered. Go to Sign In.';
        }
      },
      (error) => {
        console.error('Error checking phone number:', error);
        this.error = 'Error Checking Phone Number.';
      }
    );
  }
  
  
  

  title = 'otp-app';
  var2 = true;
  otp!: string;
  inputDigitLeft: string = 'Verify code';
  btnStatus: string = 'btn-light';

  public configOptions = {
    length: 6,
    inputClass: 'digit-otp',
    containerClass: 'd-flex justify-content-between'
  };

  onOtpChange(event: any) {
    this.otp = event;
    if (this.otp.length < this.configOptions.length) {
      this.inputDigitLeft = `${this.configOptions.length - this.otp.length} digits Left`;
      this.btnStatus = 'btn-light';
    }

    if (this.otp.length === this.configOptions.length) {
      this.inputDigitLeft = "Let's go!";
      this.btnStatus = 'btn btn-panel btn-hover';
    }
  }

  generateOTP() {
    // Call your service to generate OTP and handle the response
    this.userService.generateOTP(this.phoneNumber).subscribe(
      (response) => {
        // Handle success (you may display a message or update UI)
        console.log('OTP generated successfully:', response);
        // Update UI to show OTP input field
        // For example, set a flag like this:
        this.var1 = true;
      },
      (error) => {
        // Handle error (display error message or retry)
        console.error('Error generating OTP:', error);
      }
    );
  }

  validateOTP() {
    // Call your service to validate OTP and handle the response
    this.userService.validateOTP(this.otp).subscribe(
      (response) => {
        // Handle success
        if (response.message === 'validated') {
          // OTP is valid, navigate to the home page or show a success message
          console.log('OTP validated successfully:', response);
          this.router.navigate(['/loginhome']);
        } else {
          // OTP is invalid, you may display an error message
          console.log('Invalid OTP. Please try again.');
        }
      },
      (error) => {
        // Handle error (display error message or retry)
        console.error('Error validating OTP:', error);
      }
    );
  }

  ngOnInit() {
    console.log('Checking if the user is logged in...');

    if (this.userService.isUserLoggedIn()) {
      const userData = this.userService.getUserDataFromSession();
      console.log('User data in session:', userData);
      // You may want to perform additional actions based on the presence of user data
    } else {
      console.log('User is not logged in.');
    }
  }
  
}
