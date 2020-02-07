import { Component } from '@angular/core';
import { CardGridSetting } from 'src/app/shared/components/grid-list/model/grid-list.model';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.page.html',
  styleUrls: ['./skills.page.scss']
})
export class SkillsPage {
  /** Based on the screen size, switch from standard to one column per row */
  mobileViewCards: CardGridSetting[] = [
    {
      title: 'programmingSkillsTitle',
      content: 'programmingSkillsContent',
      otherData: [
        {percentage: 80, value: 0, name: 'Html, JS, CSS'},
        {percentage: 75, value: 0, name: 'TS'},
        {percentage: 70, value: 0, name: 'Ruby on Rails'},
        {percentage: 85, value: 0, name: 'Angular 8'},
        {percentage: 85, value: 0, name: 'Ionic'},
        {percentage: 60, value: 0, name: 'Express'},
        {percentage: 80, value: 0, name: 'Git'},
        {percentage: 70, value: 0, name: 'Linux'},
        {percentage: 70, value: 0, name: 'Docker'},
        {percentage: 50, value: 0, name: 'AWS'},
      ],
      cols: 2,
      rows: 1,
    },
    {
      title: 'angularSkillsTitle',
      content: 'angularSkillsContent',
      otherData: [
        {percentage: 80, value: 0, name: 'Component'},
        {percentage: 80, value: 0, name: 'Service'},
        {percentage: 70, value: 0, name: 'Module'},
        {percentage: 70, value: 0, name: 'Pipe'},
        {percentage: 65, value: 0, name: 'Directive'},
        {percentage: 70, value: 0, name: 'Interceptor'},
        {percentage: 60, value: 0, name: 'Resolver'},
        {percentage: 70, value: 0, name: 'Guard'},
        {percentage: 75, value: 0, name: 'RxJs'},
        {percentage: 20, value: 0, name: 'NgRx'},
        {percentage: 75, value: 0, name: 'Angular Material'},
        {percentage: 50, value: 0, name: 'Karma Jasmine'},
      ],
      cols: 2,
      rows: 1,
    },
    {
      title: 'languageSkillsTitle',
      content: 'languageSkillsContent',
      cols: 2,
      rows: 1,
      otherData: [
        {percentage: 85, value: 0, name: 'Japanese'},
        {percentage: 90, value: 0, name: 'English'},
        {percentage: 90, value: 0, name: 'Malay'},
      ],
    },
  ];
  webViewCards: CardGridSetting[] = [
    {
      title: 'programmingSkillsTitle',
      content: 'programmingSkillsContent',
      cols: 1,
      rows: 1,
      otherData: [
        {percentage: 80, value: 0, name: 'Html, JS, CSS'},
        {percentage: 75, value: 0, name: 'TS'},
        {percentage: 70, value: 0, name: 'Ruby on Rails'},
        {percentage: 85, value: 0, name: 'Angular 8'},
        {percentage: 60, value: 0, name: 'Express'},
        {percentage: 80, value: 0, name: 'Git'},
        {percentage: 70, value: 0, name: 'Docker'},
        {percentage: 50, value: 0, name: 'AWS'},
      ],
    },
    {
      title: 'angularSkillsTitle',
      content: 'angularSkillsContent',
      cols: 1,
      rows: 1,
      otherData: [
        {percentage: 80, value: 0, name: 'Component'},
        {percentage: 80, value: 0, name: 'Service'},
        {percentage: 70, value: 0, name: 'Module'},
        {percentage: 70, value: 0, name: 'Pipe'},
        {percentage: 65, value: 0, name: 'Directive'},
        {percentage: 70, value: 0, name: 'Interceptor'},
        {percentage: 60, value: 0, name: 'Resolver'},
        {percentage: 70, value: 0, name: 'Guard'},
        {percentage: 75, value: 0, name: 'RxJs'},
        {percentage: 20, value: 0, name: 'NgRx'},
        {percentage: 75, value: 0, name: 'Angular Material'},
        {percentage: 50, value: 0, name: 'Karma Jasmine'},
      ],
    },
    {
      title: 'languageSkillsTitle',
      content: 'languageSkillsContent',
      cols: 1,
      rows: 1,
      otherData: [
        {percentage: 85, value: 0, name: 'Japanese'},
        {percentage: 90, value: 0, name: 'English'},
        {percentage: 90, value: 0, name: 'Malay'},
      ],
    },
  ];

  constructor() {}
}
