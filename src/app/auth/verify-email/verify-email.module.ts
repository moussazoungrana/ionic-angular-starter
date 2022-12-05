import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {VerifyEmailComponent} from './verify-email.component';
import {RouterModule, Routes} from '@angular/router';
import {IonicModule} from '@ionic/angular';


const routes: Routes = [
  {
    path: '',
    component: VerifyEmailComponent
  }
];


@NgModule({
  declarations: [VerifyEmailComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    IonicModule
  ]
})
export class VerifyEmailModule { }
