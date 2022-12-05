import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GuestGuard implements CanActivate {

  constructor(
    private router: Router
  ) {
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    // Your logic here
    return true;

    // Example
    /*
      if (
        !localStorage.getItem(environment.access_token)
        || !localStorage.getItem(environment.user_info)
      ) {
        localStorage.removeItem(environment.access_token);
        localStorage.removeItem(environment.user_info);
        return true;
      }
      this.router.navigate(['/']);
      return false;

     */

  }

}
