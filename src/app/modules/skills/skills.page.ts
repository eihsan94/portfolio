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
      title: 'frontEndSkillsTitle',
      content: 'frontEndSkillsContent',
      otherData: [
        {percentage: 80, value: 0, name: 'Html, JS, CSS'},
        {percentage: 75, value: 0, name: 'TS'},
        {percentage: 85, value: 0, name: 'Angular 11'},
        {percentage: 80, value: 0, name: 'React'},
        {percentage: 60, value: 0, name: 'Next JS'},
        {percentage: 85, value: 0, name: 'Ionic'},
        {percentage: 60, value: 0, name: 'Express'},
        {percentage: 80, value: 0, name: 'Git'},
        {percentage: 70, value: 0, name: 'Docker'},
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
      title: 'frontEndSkillsTitle',
      content: 'frontEndSkillsContent',
      cols: 1,
      rows: 1,
      otherData: [
        {percentage: 90, value: 0, name: 'Html, JS, CSS'},
        {percentage: 85, value: 0, name: 'TS'},
        {percentage: 85, value: 0, name: 'JSX'},
        {percentage: 70, value: 0, name: 'TSX'},
        {percentage: 80, value: 0, name: 'React'},
        {percentage: 70, value: 0, name: 'Redux'},
        {percentage: 70, value: 0, name: 'Next Js'},
        {percentage: 85, value: 0, name: 'Angular 11'},
        {percentage: 85, value: 0, name: 'Bootstrap'},
        {percentage: 70, value: 0, name: 'Tailwind'},
        {percentage: 70, value: 0, name: 'Figma'},
      ],
    },
    {
      title: 'otherSkillsTitle',
      content: 'otherSkillsContent',
      cols: 1,
      rows: 1,
      otherData: [
        {percentage: 80, value: 0, name: 'Node'},
        {percentage: 80, value: 0, name: 'Express'},
        {percentage: 90, value: 0, name: 'Git'},
        {percentage: 70, value: 0, name: 'Docker'},
        {percentage: 50, value: 0, name: 'AWS'},
      ],
    },
    {
      title: 'languageSkillsTitle',
      content: 'languageSkillsContent',
      cols: 1,
      rows: 1,
      otherData: [
        {percentage: 90, value: 0, name: 'Japanese'},
        {percentage: 90, value: 0, name: 'English'},
        {percentage: 90, value: 0, name: 'Malay'},
      ],
    },
  ];

  constructor() {}
}
