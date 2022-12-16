import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  constructor(private httpClient: HttpClient) { }

  checkDuplicity(email: string): Observable<{ valid: boolean }> {
    return this.httpClient.post<{ valid: boolean }>('https://5ed74760152c310016d84d62.mockapi.io/api/validation', email)
  }
}
