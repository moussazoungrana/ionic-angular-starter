import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {authOptions} from "../core/functions/options";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  API_URL = environment.api_url + '/profile';

  constructor(private http: HttpClient) {
  }

  updateDetails(data: any) {
    return this.http.post(this.API_URL + '/details', data, authOptions());
  }

  updatePassword(data: any) {
    return this.http.post(this.API_URL + '/password', data, authOptions());
  }

}
