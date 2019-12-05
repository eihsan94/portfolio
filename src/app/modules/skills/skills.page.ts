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
      {percentage: 80, value: 0},
      {percentage: 70, value: 0}
    ],
    cols: 2,
    rows: 1,
  },
  {
    title: 'angularSkillsTitle',
    content: 'angularSkillsContent',
    otherData: [
      {percentage: 50, value: 0},
      {percentage: 70, value: 0},
      {percentage: 60, value: 0},
      {percentage: 80, value: 0},
    ],
    cols: 2,
    rows: 1,
  },
  {
    title: 'languageSkillsTitle',
    content: 'languageSkillsContent',
    cols: 1,
    rows: 1,
    otherData: [
      {percentage: 80, value: 0},
      {percentage: 80, value: 0},
      {percentage: 80, value: 0},
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
      {percentage: 80, value: 0},
      {percentage: 70, value: 0}
    ],
  },
  {
    title: 'angularSkillsTitle',
    content: 'angularSkillsContent',
    cols: 1,
    rows: 1,
    otherData: [
      {percentage: 50, value: 0},
      {percentage: 70, value: 0},
      {percentage: 60, value: 0},
      {percentage: 80, value: 0},
    ],
  },
  {
    title: 'languageSkillsTitle',
    content: 'languageSkillsContent',
    cols: 1,
    rows: 1,
    otherData: [
      {percentage: 80, value: 0},
      {percentage: 80, value: 0},
      {percentage: 80, value: 0},
    ],
  },
];

constructor() {}
}
