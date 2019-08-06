import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardcodedAuthService {

  constructor() { }

  authenticate(username, password: String) {
    if(password.length > 6) {
      sessionStorage.setItem("authenticatedUser", username);
      return true;
    }
    return false;
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem("authenticatedUser");
    return !(user === null);
  }
}
