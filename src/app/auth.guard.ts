import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { map, Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { Token } from './interfaces/token.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {

  }

  canActivate(): Observable<boolean> {
    return this.authService.token$.pipe(map((token: Token | null) => {
      if(!!token) {
        return true;
      }
      this.router.navigate(['/login']);
      return false;
    }))       
  }
  
}
