import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/app/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private readonly URL: string = environment.api

  constructor(private http: HttpClient) { }



  sendCredentials(email: string, password: string): Observable<any>{
    const body = {
      email,
      password
    }
    return this.http.post(`${this.URL}/auth/login`, body)
  }
}
