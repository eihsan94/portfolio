import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfilePage } from './modules/profile/pages/profile.page';


const routes: Routes = [
  { path: '', component: ProfilePage },
  { path: 'skills', component: ProfilePage },
  { path: 'education', component: ProfilePage },
  { path: 'qualifications', component: ProfilePage },
  { path: 'contact', component: ProfilePage },
  { path: '**', redirectTo: '' },
  // { path: '/skills', component: DiaryComponent , canActivate: [AuthGuard] },
  // { path: 'login', component: LoginComponent },
  // { path: 'bear-land', component: BearLandComponent, canActivate: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
