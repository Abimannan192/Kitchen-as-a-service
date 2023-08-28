import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLoggedIn: boolean = false;
  constructor() { }
  login(): void {
    this.isLoggedIn = true;
  }
  logout(): void {
    this.isLoggedIn = false;
  }

}