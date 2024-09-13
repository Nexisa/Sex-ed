import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  name = '';
  className = '';
  rollNo = '';
  password = '';
  message = '';

  constructor(private userService: UserService, private router: Router) { }

  onRegister(): void {
    const user = {
      name: this.name,
      className: this.className,
      rollNo: this.rollNo,
      password: this.password
    };
    this.userService.register(user).subscribe(
      response => {
        this.message = 'Registration successful! Redirecting to login...';
        setTimeout(() => this.router.navigate(['/login']), 2000);
      },
      error => {
        this.message = 'Registration failed. Please try again.';
      }
    );
  }
}
