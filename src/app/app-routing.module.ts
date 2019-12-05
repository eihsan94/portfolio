import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfilePage } from './modules/profile/pages/profile.page';
import { SkillsPage } from './modules/skills/skills.page';
import { EducationPage } from './modules/education/education.page';
import { QualificationsPage } from './modules/qualifications/qualifications.page';


const routes: Routes = [
  { path: '', component: ProfilePage },
  { path: 'skills', component: SkillsPage },
  { path: 'education', component: EducationPage },
  { path: 'qualifications', component: QualificationsPage },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
