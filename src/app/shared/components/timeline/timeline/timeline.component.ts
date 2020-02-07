import { QueryList, ElementRef, ChangeDetectorRef, ViewEncapsulation } from '@angular/core';
import { MglTimelineEntryComponent } from './../timeline-entry/timeline-entry.component';
import { Component, Input, ContentChildren, AfterViewInit, EventEmitter, Output, HostListener, OnChanges, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'mgl-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class MglTimelineComponent implements AfterViewInit, OnChanges, OnDestroy {

  @Input()
  toggle = true;

  @Input()
  mobileWidthThreshold = 640;

  @Input()
  alternate = true;

  @Input()
  side = 'left';

  set mobile(value: boolean) {
    if (this.content) {
      this.content.forEach(entry => entry.mobile = value);
      this.elementRef.nativeElement.classList.toggle('mobile', value);
    }
  }

  get mobile() {
    return this.elementRef.nativeElement.classList.contains('mobile');
  }

  // tslint:disable-next-line: variable-name
  private _focusOnOpen = false;

  @Input()
  set focusOnOpen(focusOnOpen) {
    if (this.content) {
      this.content.forEach(entry => entry.focusOnOpen = focusOnOpen);
      this._focusOnOpen = focusOnOpen;
    }
  }

  get focusOnOpen() {
    return this._focusOnOpen;
  }

  private subscriptions: Subscription[] = [];

  @ContentChildren(MglTimelineEntryComponent)
  private content: QueryList<MglTimelineEntryComponent>;

  constructor(private elementRef: ElementRef, private changeDetectorRef: ChangeDetectorRef) { }

  ngOnChanges(simpleChanges) {
    this.updateContent();
  }

  ngOnDestroy() {
    this.subscriptions.forEach(subscription => subscription.unsubscribe());
  }

  ngAfterViewInit() {
    this.mobile = this.elementRef.nativeElement.clientWidth < this.mobileWidthThreshold;
    setTimeout(() => this.updateContent());
    this.content.changes.subscribe(changes => {
      this.updateContent();
    });
  }

  private updateContent() {
    this.ngOnDestroy();
    if (this.content) {
      this.content.forEach((entry, index) => {
        if (this.toggle) {
          this.subscriptions.push(
            entry.changed.subscribe(state => {
              if (state === true) {
                this.content.filter(e => e !== entry).forEach(e => e.collapse());
              }
            }));
        }
        entry.alternate = this.alternate ? (index % 2 !== 0) : (this.side === 'right');
        entry.mobile = this.mobile;
        entry.focusOnOpen = this.focusOnOpen;
      });
    }
  }

  @HostListener('window:resize', ['$event'])
  onResize(ev: KeyboardEvent) {
    // console.log(this.mobileWidthThreshold);
    this.mobile = this.elementRef.nativeElement.clientWidth < this.mobileWidthThreshold;
  }
}
