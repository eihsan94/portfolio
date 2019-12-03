import { Component } from '@angular/core';
import { ButtonMetaData } from './shared/components/buttons/model/button';
import { ThemeService } from './core/services/theme.service';
import { MenuList } from './shared/components/sidenav/model/menu.model';
import { TitleService } from './core/services/title.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  darkMode: boolean;
  menuList: MenuList = {
    title: `IHSAN'S CV`,
    menus: [
      {name: 'Profile', icon: 'account_circle', path: ''},
      {name: 'Skills', icon: 'accessibility_new', path: '/skills'},
      {name: 'Education', icon: 'menu_book', path: '/education'},
      {name: 'Qualifications', icon: 'playlist_add_check', path: '/qualifications'},
      {name: 'Contact', icon: 'contact_mail', path: '/contact'},
    ],
  };
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
    private titleService: TitleService,
  ) {
    this.titleService.menuList = this.menuList;
    this.themeService.isDarkTheme.subscribe(darkMode => {
      this.darkMode = darkMode;

    });
  }
}
