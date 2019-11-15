import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {
  token: any;
  constructor(public router: Router) {
    this.token = localStorage.getItem('token')
  }
  canActivate(): boolean {
    if (!this.token) {
      this.router.navigate(['login']);
      return false;
    }
    return true;
  }
}