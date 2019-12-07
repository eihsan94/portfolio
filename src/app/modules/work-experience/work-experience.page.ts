import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-work-experience',
  templateUrl: './work-experience.page.html',
  styleUrls: ['./work-experience.page.scss']
})
export class WorkExperiencePage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  title = 'app';

  alternate: boolean = false;
  toggle: boolean = false;
  color: boolean = false;
  size: number = 40;
  side: string = 'left';
  mobileWidthThreshold: number = 640;

  entries = [
    {
      header: 'BirdworksSE',
      content: {
        main: 'BirdworksSEMainContent',
        sub: [
          'BirdworksSESubContent1',
          'BirdworksSESubContent2',
          'BirdworksSESubContent3',
        ],
      },
      year: 'BirdworksSEYear',
    },
    {
      header: 'BirdworksPTJ',
      content: {
        main: 'BirdworksPTJMainContent',
        sub: [
          'BirdworksPTJSubContent1',
          'BirdworksPTJSubContent2',
          'BirdworksPTJSubContent3',
        ],
      },
      year: 'BirdworksPTJYear',
    },
    {
      header: 'IsanaIntern',
      content: {
        main: 'IsanaInternMainContent',
        sub: [
          'IsanaInternSubContent1',
          'IsanaInternSubContent2',
        ],
      },
      year: 'IsanaInternYear',
    },
    {
      header: 'AirportTranslator',
      content: {
        main: 'AirportTranslatorMainContent',
        sub: [
          'AirportTranslatorSubContent1',
          'AirportTranslatorSubContent2',
          'AirportTranslatorSubContent3',
        ],
      },
      year: 'AirportTranslatorYear',
    },
    {
      header: 'TranslatorJamaica',
      content: {
        main: 'TranslatorJamaicaMainContent',
        sub: [
          'TranslatorJamaicaSubContent1',
          'TranslatorJamaicaSubContent2',
        ],
      },
      year: 'TranslatorJamaicaYear',
    },
  ]
}

