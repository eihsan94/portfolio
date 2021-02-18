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
      img: '../../../../assets/image/hello.jpg',
      cols: 2,
      rows: 1,
      style: {
        background: '#FD9A14',
        color: 'white',
      },
    },
    {
      title: 'basicInfoTitle', content: 'basicInfoContent', cols: 2, rows: 1,
      img: '../../../../assets/image/contact.jpg',
      style: {
        background: '#5AB25E',
        color: 'white',
      }
    },
    {
      title: 'hobbyTitle', content: 'hobbyContent', cols: 2, rows: 1,
      img: '../../../../assets/image/hobbies.jpg',
      style: {
        background: '#424242',
        color: 'white',
      },
    },
  ];
  webViewCards: CardGridSetting[] = [
    {
      title: 'selfIntroTitle',
      content: 'selfIntroContent',
      img: '../../../../assets/image/hello.jpg',
      cols: 2,
      rows: 1,
      style: {
        background: '#5AB25E',
        color: 'white',
      }
    },
    {
      title: 'basicInfoTitle', content: 'basicInfoContent', cols: 1, rows: 1,
      img: '../../../../assets/image/contact.jpg',
      style: {
        background: '#FD9A14',
        color: 'white',
      }
    },
    {
      title: 'hobbyTitle', content: 'hobbyContent', cols: 1, rows: 1,
      img: '../../../../assets/image/hobbies.jpg',
      style: {
        background: '#424242',
        color: 'white',
      },
    },
  ];

  constructor() {}
}
