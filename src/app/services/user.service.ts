import { Injectable } from '@angular/core';
import {environment} from 'src/environments/environment'
import {HttpClient} from "@angular/common/http";
import {User} from "../interfaces/user";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private miAppUrl: string;
  private miApiUrl: string;
  constructor(private http: HttpClient) {
    this.miAppUrl = environment.endpoint
    this.miApiUrl = 'api/users';
  }

  signIn(user: User) : Observable<any>{
    return this.http.post(`${this.miAppUrl}${this.miApiUrl}`, user)
  }
  login(user: User): Observable<string>{
    return this.http.post<string>(`${this.miAppUrl}${this.miApiUrl}/login`, user)
  }
}
