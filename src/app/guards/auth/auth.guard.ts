import {Injectable} from '@angular/core';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard  {
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
      localStorage.getItem(environment.access_token)
      && localStorage.getItem(environment.user_info)
    ) {
      return true;
    }
    localStorage.removeItem(environment.access_token);
    localStorage.removeItem(environment.user_info);
    this.router.navigate(['/auth']);
    return false;
    */
    
  }

}
