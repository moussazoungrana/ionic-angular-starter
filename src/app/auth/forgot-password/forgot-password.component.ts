import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthenticationService} from "../../services/auth/authentication.service";
import {Router} from "@angular/router";
import {ToastController} from "@ionic/angular";


@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss'],
})
export class ForgotPasswordComponent implements OnInit {

  form: FormGroup;
  processing: Boolean;
  errors: any;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthenticationService,
    private router: Router,
    private toastController: ToastController
  ) {
    this.constructForm()
  }

  ngOnInit() {
  }

  private constructForm(): void {
    this.form = this.formBuilder.group({
      email: [
        '',
        [Validators.required, Validators.email],
      ]
    });
  }

  get controls() {
    return this.form.controls;
  }

  async presentToast(position: 'top' | 'middle' | 'bottom', message: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000,
      position: position
    });

    await toast.present();
  }

  forgotPassword() {

    // Your logic here
    this.router.navigate(['/auth/reset-password']);

    // Example
    /*
      if (!this.form.pristine && !this.form.errors) {
        this.processing = true;
        this.errors = undefined;
        this.authService.forgotPassword(this.controls.email.value)
          .subscribe((res: any) => {
            this.presentToast('bottom',res.messages[0]);
            this.router.navigate(['/auth/reset-password']);
            this.processing = false;
          }, (err: any) => {
            this.errors = err.error.messages;
            this.processing = false;
          });
      }
    */

  }

}
