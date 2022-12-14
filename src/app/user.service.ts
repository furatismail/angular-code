import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { User } from './interfaces/user.interface';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient) { }

  get(userId: string) : Promise<User> {
    return lastValueFrom(this.httpClient.get<User>(`https://5ed74760152c310016d84d62.mockapi.io/api/users/${userId}`));
  }

  save(user: User) : Promise<{status: boolean}> {
    return lastValueFrom(this.httpClient.post<{status: boolean}>('https://5ed74760152c310016d84d62.mockapi.io/api/users', user))
  }
}
