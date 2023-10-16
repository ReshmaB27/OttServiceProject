import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-add-services',
  templateUrl: './add-services.component.html',
  styleUrls: ['./add-services.component.css']
})
export class AddServicesComponent implements OnInit{
  title = 'otp-app';
  newSubAccount: any = {
    fname: '',
    lname: '',
    email: '',
    phone: ''
  };// New variable to store sub-accounts
  errorMessage: string = '';

  constructor(private userService: UserService){
  }
  userData = this.userService.getUserDataFromSession();

  var1=false;
  var2=true;
  // Inside AddServicesComponent class in add-services.component.ts

clickotp() {
  this.userService.checkUserExists(this.newSubAccount.phone).subscribe(
    (userExists) => {
      console.log('User exists:', userExists);

      if (userExists) {
        // Display OTP form
        this.var1 = true;
        console.log('Sub Account Data:', this.newSubAccount);
      } else {
        // Display error message
        this.errorMessage = 'User does not exist.';
      }
    },
    (error) => {
      console.error('Error checking user existence:', error);
    }
  );
}

  otp!: string;
  inputDigitLeft: string = "Verify code";
  btnStatus: string = "btn-light";

  public configOptions = {
    length: 6,
    inputClass: 'digit-otp',
    containerClass: 'd-flex justify-content-between'
  }
  

  onOtpChange(event: any) {
    this.otp = event;
    if(this.otp.length < this.configOptions.length) {
      this.inputDigitLeft = this.configOptions.length - this.otp.length + " digits Left";
      this.btnStatus = 'btn-light';
    }

    if(this.otp.length == this.configOptions.length) {
      this.inputDigitLeft = "Let's go!";
      this.btnStatus = 'btn btn-panel btn-hover';
    }
  }

  ngOnInit() {
    const primaryAccountId = this.userData?.uid;
    console.log('Primary Account ID:', primaryAccountId);
    if (primaryAccountId) {
        this.loadSubAccounts(primaryAccountId);
    }
}

  
  loadSubAccounts(primaryAccountId: number) {
    this.userService.getSubAccounts(primaryAccountId).subscribe(
      (subAccount) => {
        this.newSubAccount = subAccount;
      },
      (error) => {
        console.error('Error loading sub-accounts:', error);
      }
    );
  }
  

  // Inside the AddServicesComponent class in add-services.component.ts

// Inside AddServicesComponent class in add-services.component.ts

linkSubAccount() {
  const primaryAccountId = this.userData?.uid;

  // Check if the user with the entered details exists in the signup_entity
  this.userService.checkUserExists(this.newSubAccount).subscribe(
    (userExists) => {
      console.log('User Exists:', userExists);

      if (userExists) {
        // User exists, proceed to link sub-account and display OTP form
        this.userService.linkSubAccount(primaryAccountId, this.newSubAccount).subscribe(
          (linkedSubAccount) => {
            console.log('Linked SubAccount:', linkedSubAccount);

            if (linkedSubAccount) {
              // Check if the subAccount array is not undefined and has less than 4 elements
              if (this.newSubAccount && this.newSubAccount.length < 4) {
                this.newSubAccount.push(linkedSubAccount);
                // Display OTP form
                this.var1 = true;
              } else {
                // Display an error message if the sub-account limit is reached
                this.errorMessage = 'You can only add 4 sub accounts';
              }
            } else {
              // Display an error message if linking sub-account fails
              this.errorMessage = 'Error linking sub-account';
            }
          },
          (error) => {
            console.error('Error linking sub-account:', error);
          }
        );
      } else {
        // Display an error message if the user does not exist
        this.errorMessage = 'Add an existing protel user';
      }
    },
    (error) => {
      console.error('Error checking user existence:', error);
    }
  );
}



}
