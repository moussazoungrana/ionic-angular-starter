import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {MainComponent} from './main.component';
import {IonicModule} from '@ionic/angular';
import {HeaderComponent} from '../components/header/header.component';
import {AuthGuard} from '../guards/auth/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
      },
      {
        path: 'profile',
        loadChildren: () => import('./dashboard/profile/profile.module').then(m => m.ProfileModule)
      },
    ]
  }
];

@NgModule({
  declarations: [MainComponent, HeaderComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    IonicModule
  ]
})
export class MainModule {
}
