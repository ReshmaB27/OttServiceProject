import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-after-login-nav-bar',
  templateUrl: './after-login-nav-bar.component.html',
  styleUrls: ['./after-login-nav-bar.component.css']
})
export class AfterLoginNavBarComponent implements OnInit {
  welcomeMessage: string = '';

  constructor(private userService: UserService) {}

  ngOnInit() {
    // Check if the user is logged in
    if (this.userService.isUserLoggedIn()) {
      // Fetch user data
      const userData = this.userService.getUserDataFromSession();

      // Display the welcome message
      this.welcomeMessage = `Welcome to Protel ${userData.fname}`;
    }
  }

  logout(): void {
    // Call the logout method when the user clicks "Logout"
    this.userService.logout();
    // You might also want to navigate the user to the login page or perform any other necessary actions after logout.
  }
}
