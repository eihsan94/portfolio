import { Component, OnInit } from '@angular/core';
import { TranslationService } from 'src/app/core/services/translation.service';
import { Language } from './model/language.model';

@Component({
  selector: 'app-translate',
  templateUrl: './translate.component.html',
  styleUrls: ['./translate.component.scss']
})
export class TranslateComponent implements OnInit {
  selectedLanguage = 'en';
  languages: Language[] = [
    {name: 'English', value: 'en', flag: '../../../../assets/icon/en.png'},
    {name: '日本語', value: 'ja', flag: '../../../../assets/icon/ja.png'},
  ];
  constructor(
    private translationService: TranslationService,
  ) { }

  ngOnInit() {
  }
  switchLanguage(lang: string): void {
    this.translationService.setCurrentLanguage(lang);
  }
}
