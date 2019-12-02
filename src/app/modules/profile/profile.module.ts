import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfilePage } from './pages/profile.page';



@NgModule({
  declarations: [
    ProfilePage,
  ],
  exports: [
    ProfilePage,
  ],
  imports: [
    CommonModule
  ]
})
export class ProfileModule { }
