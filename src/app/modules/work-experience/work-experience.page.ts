import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-work-experience',
  templateUrl: './work-experience.page.html',
  styleUrls: ['./work-experience.page.scss']
})
export class WorkExperiencePage implements OnInit {
  title = 'app';

  alternate = false;
  toggle = false;
  color = false;
  size = 40;
  side = 'left';
  mobileWidthThreshold = 640;

  entries = [
    {
      header: 'SRGSE',
      content: {
        main: 'SRGSEMainContent',
        sub: [
          'SRGSESubContent1',
          'SRGSESubContent2',
          'SRGSESubContent3',
          'SRGSESubContent4',
        ],
      },
      year: 'SRGSEYear',
    },
    {
      header: 'C3REVESE',
      content: {
        main: 'C3REVESEMainContent',
        sub: [
          'C3REVESESubContent1',
          'C3REVESESubContent2',
          'C3REVESESubContent3',
          'C3REVESESubContent4',
        ],
      },
      year: 'C3REVESEYear',
    },
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
  ];

  constructor() { }

  ngOnInit() {
  }

}

