import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage  {

  constructor(private router: Router) { }

  login(){
    this.router.navigate(['/pages/feed']);
  }

  forgotPassword() {
    console.log('Forgot password clicked');
    // Navigation logic to forgot password page
  }
  
}
