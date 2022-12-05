import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ResetPasswordComponent } from './reset-password.component';
import { IonicModule } from '@ionic/angular';
import {ReactiveFormsModule} from "@angular/forms";
import {TranslateModule} from "@ngx-translate/core";

const routes: Routes= [
  {
    path: '',
    component: ResetPasswordComponent
  }
]

@NgModule({
  declarations: [ResetPasswordComponent],
    imports: [
        CommonModule,
        IonicModule,
        RouterModule.forChild(routes),
        ReactiveFormsModule,
        TranslateModule
    ]
})
export class ResetPasswordModule { }
