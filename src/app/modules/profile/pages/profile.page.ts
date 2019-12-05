import { Component } from '@angular/core';
import { CardGridSetting } from 'src/app/shared/components/grid-list/model/grid-list.model';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss']
})
export class ProfilePage {
  /** Based on the screen size, switch from standard to one column per row */
  mobileViewCards: CardGridSetting[] = [
    {
      title: 'selfIntroTitle',
      content: 'selfIntroContent',
      cols: 2,
      rows: 1,
    },
    { title: 'basicInfoTitle', content: 'basicInfoContent', cols: 2, rows: 1 },
    { title: 'hobbyTitle', content: 'hobbyContent', cols: 2, rows: 1 },
  ];
  webViewCards: CardGridSetting[] = [
    {
      title: 'selfIntroTitle',
      content: 'selfIntroContent',
      cols: 2,
      rows: 1,
    },
    { title: 'basicInfoTitle', content: 'basicInfoContent', cols: 1, rows: 1 },
    { title: 'hobbyTitle', content: 'hobbyContent', cols: 1, rows: 1 },
  ];

  constructor() {}
}
