// tslint:disable: variable-name
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({providedIn: 'root'})
export class ThemeService {
  private _darkTheme = new BehaviorSubject < boolean > (false);
  public get isDarkTheme(): Observable < boolean > {
    return this._darkTheme.asObservable();
  }
  public toggleDarkTheme(): void {
    this._darkTheme.next(!this._darkTheme.value);
  }

  setDarkTheme(isDarkTheme: boolean): void {
    this._darkTheme.next(isDarkTheme);
  }
}
