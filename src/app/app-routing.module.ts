import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfilePage } from './modules/profile/pages/profile.page';
import { SkillsPage } from './modules/skills/skills.page';
import { EducationPage } from './modules/education/education.page';
import { QualificationsPage } from './modules/qualifications/qualifications.page';
import { WorkExperiencePage } from './modules/work-experience/work-experience.page';
import { ProjectsPage } from './modules/projects/projects.page';


const routes: Routes = [
  { path: '', component: ProfilePage, data: { animation: '' } },
  { path: 'work_experience', component: WorkExperiencePage, data: { animation: 'work_experience' } },
  { path: 'skills', component: SkillsPage, data: { animation: 'skills' } },
  { path: 'projects', component: ProjectsPage, data: { animation: 'projects' } },
  { path: 'education', component: EducationPage, data: { animation: 'education' } },
  { path: 'qualifications', component: QualificationsPage, data: { animation: 'qualifications' } },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
