import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {currentUserAvatar, currentUserEmail, currentUserName} from "../../../core/functions/user";
import {environment} from "../../../../environments/environment";
import {UserService} from "../../../services/user.service";
import {ToastController} from "@ionic/angular";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {

  form: FormGroup;
  processing: Boolean;
  passwordForm: FormGroup;
  passwordProcessing: Boolean;
  errors: any;
  passwordErrors: any;
  avatar: string;

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private router: Router,
    private toastController: ToastController
  ) {
    //this.avatar = currentUserAvatar();
    this.constructForm();
    this.constructPasswordForm();
  }

  ngOnInit() {
  }

  private constructForm(): void {
    this.form = this.formBuilder.group({
      name: [
        'test',   //currentUserName()
        Validators.required
      ],
      email: [
        'test@gmail.com', //currentUserEmail()
        [Validators.required, Validators.email],
      ]
    });
  }

  get controls() {
    return this.form.controls;
  }

  private constructPasswordForm() {
    this.passwordForm = this.formBuilder.group({

      old_password: [
        '',
        Validators.required
      ],

      new_password: [
        '',
        Validators.required
      ],
      new_password_confirmation: [
        '',
        Validators.required
      ]
    });
  }

  get passwordControls() {
    return this.passwordForm.controls;
  }

  async presentToast(position: 'top' | 'middle' | 'bottom', message: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000,
      position: position
    });
    await toast.present();
  }

  updateDetails() {

    // Your logic here

    // Example
    /*
      if (!this.form.pristine && !this.form.errors) {
      this.processing = true;
      this.errors = undefined;
      this.userService.updateDetails(
        {
          name: this.controls.name.value,
          email: this.controls.email.value
        })
        .subscribe((res: any) => {

          this.presentToast('top', 'You have successfully updated your profile');
          localStorage.setItem(environment.user_info, JSON.stringify(res.user));
          this.avatar = currentUserAvatar();

          this.processing = false;
        }, (err: any) => {
          this.processing = false;
        });
         }
     */

  }

  updatePassword() {

    // Your logic here

    //Example

    /*
    if (!this.passwordForm.pristine && !this.passwordForm.errors) {
    this.passwordProcessing = true;
    this.passwordErrors = undefined;
    this.userService.updatePassword(
      {
        old_password: this.passwordControls.old_password.value,
        new_password: this.passwordControls.new_password.value,
        new_password_confirmation: this.passwordControls.new_password_confirmation.value
      })
      .subscribe((res: any) => {
        this.presentToast('top', 'You have successfully change your password');
        localStorage.setItem(environment.user_info, JSON.stringify(res.user));
        this.resetPasswordForm();
        this.passwordProcessing = false;
      }, (err: any) => {
        this.passwordErrors = err.error.messages;
        this.passwordProcessing = false;
      });
      }
     */

  }

  private resetPasswordForm() {
    this.passwordControls.old_password.reset();
    this.passwordControls.new_password.reset();
    this.passwordControls.new_password_confirmation.reset();
  }

}
