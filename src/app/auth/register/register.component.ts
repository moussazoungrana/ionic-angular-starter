import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {AuthenticationService} from "../../services/auth/authentication.service";
import {ToastController} from "@ionic/angular";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {

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

  private constructForm() {
    this.form = this.formBuilder.group({
      name: [
        '',
        Validators.required
      ],
      email: [
        '',
        [Validators.required, Validators.email],
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

  get controls() {
    return this.form.controls;
  }

  async presentToast(position: 'top' | 'middle' | 'bottom') {
    const toast = await this.toastController.create({
      message: 'Welcome to QuizMakr, before start please, check your your mail to verify your account',
      duration: 2000,
      position: position
    });
    await toast.present();
  }


  register(): void {
    // Your logic here
    this.router.navigate(['/auth']);

    // Example
    /*
     if (!this.form.pristine && !this.form.errors) {
        this.processing = true;
         this.errors = undefined;
         this.authService.register({
           name: this.controls.name.value,
           email: this.controls.email.value,
           password: this.controls.password.value,
           password_confirmation: this.controls.password_confirmation.value
         })
           .subscribe((res: any) => {
             this.presentToast('bottom');
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
