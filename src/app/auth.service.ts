import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Authenticate } from './interfaces/authenticate.interface';
import { Token } from './interfaces/token.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  tokenSubject$ = new BehaviorSubject<Token | null>(null);
  token$ = this.tokenSubject$.asObservable();

  constructor(private httpClient: HttpClient) { }

  login(authenticate: Authenticate) : Observable<Token> {
    return this.httpClient.post<Token>(`${environment.apiUrl}/api/auth`, authenticate)
    .pipe(tap((response: Token) => {
      this.tokenSubject$.next(response);
      localStorage.setItem('token', JSON.stringify(response.token))
    }))
  }
}
