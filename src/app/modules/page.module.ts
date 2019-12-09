import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { SharedModule } from 'src/app/shared/shared.module';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ProfilePage } from './profile/pages/profile.page';
import { HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { BasicInfoComponent } from './profile/components/basic-info/basic-info.component';
import { HobbyComponent } from './profile/components/hobby/hobby.component';
import { SkillsPage } from './skills/skills.page';
import { EducationPage } from './education/education.page';
import { QualificationsPage } from './qualifications/qualifications.page';
import { WorkExperiencePage } from './work-experience/work-experience.page';
import { MglTimelineModule } from '../shared/components/timeline/timeline.module';
import { ProjectsPage } from './projects/projects.page';
import { MatRippleModule } from '@angular/material/core';

export function HttpLoaderFactory(http: HttpClient) {
    return new TranslateHttpLoader(http);
  }

@NgModule({
  declarations: [
    ProfilePage,
    BasicInfoComponent,
    HobbyComponent,
    SkillsPage,
    EducationPage,
    QualificationsPage,
    WorkExperiencePage,
    ProjectsPage,
  ],
  imports: [
    CommonModule,
    MatCardModule,
    SharedModule,
    MglTimelineModule,
    MatButtonModule,
    MatIconModule,
    MatRippleModule,
    TranslateModule.forRoot({
        loader: {
          provide: TranslateLoader,
            useFactory: HttpLoaderFactory, // exported factory function needed for AoT compilation
            deps: [HttpClient]
        }
      }),
  ]
})
export class PageModule { }
