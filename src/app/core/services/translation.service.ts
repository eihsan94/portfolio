// tslint:disable: variable-name
import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TranslationService {
  private _currentLanguage = new BehaviorSubject<string>('ja');
  public currentLanguage: Observable< string > = this._currentLanguage.asObservable();
  public setCurrentLanguage(lang: string): void { this._currentLanguage.next(lang); }

  constructor(
    private translateService: TranslateService,
  ) {
    this.currentLanguage.subscribe(lang => this.translateService.use(lang));
  }
}
