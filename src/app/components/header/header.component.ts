import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from "../../services/auth/authentication.service";
import {environment} from '../../../environments/environment';
import {Router} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  constructor(
    private router: Router,
    private authService: AuthenticationService
  ) { }

  ngOnInit() {}

  logout(){

    // Your logic here
    this.router.navigate(['/auth']);

    /*
      return this.authService.logout()

      .subscribe((res: any) => {
        localStorage.removeItem(environment.user_info)
        localStorage.removeItem(environment.access_token)
        this.router.navigate(['/auth']);
      })

     */
    
  }

}
