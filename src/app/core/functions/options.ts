import { HttpHeaders } from '@angular/common/http';
import {environment} from "../../../environments/environment";


/**
 * Generate HTTP request options for non-authenticated users
 */
export const noAuthOptions = () => ({
  headers: new HttpHeaders({
    Accept: 'application/json'
  })
});

/**
 * Generate HTTP request options for authenticated users
 */
export const authOptions = () => ({
  headers: new HttpHeaders({
    Accept: 'application/json',
    Authorization: 'Bearer ' + localStorage.getItem(environment.access_token)
  })
});
