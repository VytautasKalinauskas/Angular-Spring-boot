import { Component, OnInit } from '@angular/core';
import { Router } from '../../../node_modules/@angular/router';
import { HardcodedAuthService } from '../service/hardcoded-auth.service';

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
  constructor(private router: Router, private hardcodedAuthService: HardcodedAuthService) { }

  ngOnInit() {
  }

  handleLogin() {
    if(this.hardcodedAuthService.authenticate(this.username, this.password)){
      this.router.navigate(['welcome', this.username])
    }
    else {
      this.invalidLogin = true;
    }
  }
  

}
