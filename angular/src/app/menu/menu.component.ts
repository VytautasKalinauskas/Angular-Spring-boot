import { Component, OnInit } from '@angular/core';
import { HardcodedAuthService } from '../service/hardcoded-auth.service';
import { Router } from '../../../node_modules/@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {


  constructor(private hardcodedAuthService : HardcodedAuthService, private router: Router) { }

  handleLogout() {
    sessionStorage.removeItem("authenticatedUser");
    this.router.navigate(['login'])
  }

  ngOnInit() {
  }

}
