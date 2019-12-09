import { Injectable } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { Location } from '@angular/common';
import { BehaviorSubject, Observable } from 'rxjs';
import { MenuList, Menu } from 'src/app/shared/components/sidenav/model/menu.model';

@Injectable({
  providedIn: 'root'
})
export class TitleService {
  private titleSubject = new BehaviorSubject < Menu > (new Menu());
  public get currentTitle(): Observable< Menu > { return this.titleSubject.asObservable(); }
  public set nextTitle(menu: Menu) { this.titleSubject.next(menu); }
  public menuList: MenuList;
  constructor(
    private router: Router,
    private location: Location,
    ) {
      this.router.events.forEach((event) => {
        if (event instanceof NavigationEnd) {
          this.titleSubject.next(this.menuList.menus.find(menu => menu.path === this.location.path()));
        }
        // NavigationEnd
        // NavigationCancel
        // NavigationError
        // RoutesRecognized
      });
    }


}
