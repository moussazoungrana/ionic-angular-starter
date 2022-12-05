import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from "../../services/auth/authentication.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {environment} from '../../../environments/environment';
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  form: FormGroup;
  processing: Boolean;
  errors: any;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthenticationService,
    private router: Router
  ) {
    this.constructForm();
  }

  ngOnInit(): void {
  }

  private constructForm(): void {
    this.form = this.formBuilder.group({
      email: [
        '',
        [Validators.required, Validators.email],
      ],
      password: [
        '',
        Validators.required
      ]
    });
  }

  get controls() {
    return this.form.controls;
  }

  login() {

    this.router.navigate(['/']);

    // Your logic here

    //Example

    /* if (!this.form.pristine && !this.form.errors) {

      this.processing = true;
      this.errors = undefined;
      this.authService.login(this.controls.email.value, this.controls.password.value)
        .subscribe((res: any) => {
          localStorage.setItem(environment.user_info, JSON.stringify(res.user));
          localStorage.setItem(environment.access_token, res.token);
          this.router.navigate(['/']);
          this.processing = false;
        }, (err: any) => {
          this.errors = err.error.messages;
          this.processing = false;
        })
     };

    */
  }


}
