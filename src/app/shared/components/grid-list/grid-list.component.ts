/**
 * @Input mobileViewCards => the card model for mobile views
 * @Input webViewCards => the card model for web views
 * @Directive cardItem => directive that hold the parent projection html element
 */
// this is the component that use ngTemplateOutlet.
// this component could inject data from child to parent.

import { Component, OnInit, Input, ContentChild, TemplateRef } from '@angular/core';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { map } from 'rxjs/operators';
import { CardGridSetting } from './model/grid-list.model';
import { CardItemDirective } from './directive/card-item.directive';

@Component({
  selector: 'app-grid-list',
  templateUrl: './grid-list.component.html',
  styleUrls: ['./grid-list.component.scss']
})
export class GridListComponent implements OnInit {
  @ContentChild(CardItemDirective, {read: TemplateRef}) cardItemTemplate;
  @Input() mobileViewCards: CardGridSetting[];
  @Input() webViewCards: CardGridSetting[];
  /** Based on the screen size, switch from standard to one column per row */
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      return matches ? this.mobileViewCards : this.webViewCards;
    })
  );

  constructor(private breakpointObserver: BreakpointObserver) {}

  ngOnInit() {
  }

}
