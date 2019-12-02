import { Component } from '@angular/core';
import { ButtonMetaData } from './shared/components/buttons/model/button';
import { ThemeService } from './core/services/theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = `IHSAN'S CV`;  darkMode: boolean;

  darkModeButton: ButtonMetaData = {
    type: 'fab',
    icon: this.darkMode ? 'nights_stay' : 'brightness_5',
    color: 'accent',
    tooltip: this.darkMode ? 'wakeup' : 'zzzz',
    disabled: false,
    matTooltipDisabled: false,
    clickEvent: () => {
      this.themeService.toggleDarkTheme();
      this.darkModeButton = {
        ...this.darkModeButton,
        icon: this.darkMode ? 'nights_stay' : 'brightness_5',
        tooltip: this.darkMode ? 'wakeup' : 'zzzz',
      };
    },
  };
  constructor(
    private themeService: ThemeService,
  ) {
    this.themeService.isDarkTheme.subscribe(darkMode => {
      this.darkMode = darkMode;

    });
  }
}
