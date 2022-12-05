import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {authOptions, noAuthOptions} from "../../core/functions/options";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  API_URL = environment.api_url + '/auth';

  constructor(private http: HttpClient) {
  }

  login(email: string, password: string) {
    return this.http.post(this.API_URL + '/login', {
      email: email,
      password: password
    }, noAuthOptions());
  }

  logout() {
    return this.http.post(this.API_URL + '/logout', {}, authOptions());
  }

  register(data: any) {
    return this.http.post(this.API_URL + '/register', data, noAuthOptions());
  }

  forgotPassword(email: string) {
    return this.http.post(this.API_URL + '/forgot-password', {
      email: email
    }, noAuthOptions())
  }

  resetPassword(data: any) {
    return this.http.post(this.API_URL + '/reset-password', data, noAuthOptions());
  }


}
