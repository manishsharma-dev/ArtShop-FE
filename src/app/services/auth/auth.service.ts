import { Inject, Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  apiUrl = environment.apiUrl;
  http = Inject(HttpClient);
   constructor() { }

  login(email: string, password: string) {
    return this.http.post(this.apiUrl + 'auth/login', { email, password });
  }
}
