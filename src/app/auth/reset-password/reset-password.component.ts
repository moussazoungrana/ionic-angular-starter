import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {AuthenticationService} from "../../services/auth/authentication.service";
import {ToastController} from "@ionic/angular";

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss'],
})
export class ResetPasswordComponent implements OnInit {

  form: FormGroup;
  processing: boolean;
  errors: any;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authService: AuthenticationService,
    private toastController: ToastController
  ) {
    this.constructForm();
  }

  ngOnInit() {
  }

  /**
   * Construct form group
   */
  private constructForm() {
    this.form = this.formBuilder.group({
      token: [
        '',
        [Validators.required],
      ],
      password: [
        '',
        Validators.required
      ],
      password_confirmation: [
        '',
        Validators.required
      ]
    });
  }

  /**
   * Getter for form group controls
   */
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

  /**
   * Reset User password
   */
  resetPassword(): void {

    // Your logic here
    this.router.navigate(['/auth']);

    // Example
    /*
    if (!this.form.pristine && !this.form.errors) {
        this.processing = true;
        this.errors = undefined;
        this.authService.resetPassword({
          token: this.controls.token.value,
          password: this.controls.password.value,
          password_confirmation: this.controls.password_confirmation.value
        })
          .subscribe((res: any) => {
            this.presentToast('bottom',res.messages[0]);
            this.router.navigate(['/auth']);
            this.processing = false;
          }, (err: any) => {
            this.errors = err.error.messages;
            this.processing = false;
          });
    }
         */


  }


}
