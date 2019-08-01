import { Component, OnInit } from '@angular/core';
import { Router } from '../../../node_modules/@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username="vycka"
  password=""
  errorMessage="Password too short"
  invalidLogin = false;

  //Router 
  constructor(private router: Router) { }

  ngOnInit() {
  }

  handleLogin() {
    if(this.password.length > 6) {
      this.router.navigate(['welcome', this.username])
      this.invalidLogin = false;
    }
    else {
      this.invalidLogin = true;
    }
  }
  

}
