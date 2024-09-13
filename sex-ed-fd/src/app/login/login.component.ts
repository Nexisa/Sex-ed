import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  rollNo = '';
  password = '';
  message = '';

  constructor(private userService: UserService, private router: Router) { }

  onLogin(): void {
    this.userService.login(this.rollNo, this.password).subscribe(
      response => {
        this.message = 'Login successful :)';
        setTimeout(() => this.router.navigate(['/home']), 2000); // Redirect to home
      },
      error => {
        this.message = 'Login failed. Please check your credentials.';
        console.error('Login error:', error);
      }
    );
  }
}
