import { Injectable } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { Location } from '@angular/common';
import { BehaviorSubject, Observable } from 'rxjs';
import { MenuList } from 'src/app/shared/components/sidenav/model/menu.model';

@Injectable({
  providedIn: 'root'
})
export class TitleService {
  private titleSubject = new BehaviorSubject < string > ('');
  public get currentTitle(): Observable< string > { return this.titleSubject.asObservable(); }
  public set nextTitle(title: string) { this.titleSubject.next(title); }
  public menuList: MenuList;
  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private location: Location,
    ) {
      this.router.events.forEach((event) => {
        if (event instanceof NavigationEnd) {
          this.titleSubject.next(this.menuList.menus.find(menu => menu.path === this.location.path()).name);
        }
        // NavigationEnd
        // NavigationCancel
        // NavigationError
        // RoutesRecognized
      });
    }


}
