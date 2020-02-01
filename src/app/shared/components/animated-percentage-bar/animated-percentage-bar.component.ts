import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { Subscription, Observable, timer, interval } from 'rxjs';
import { ProgressData } from './model/animated-percentage-bar.model';

@Component({
  selector: 'app-animated-percentage-bar',
  templateUrl: './animated-percentage-bar.component.html',
  styleUrls: ['./animated-percentage-bar.component.scss']
})
export class AnimatedPercentageBarComponent implements OnInit, OnDestroy {
  @Input() progressData: ProgressData;
  subscription = new Subscription();
  // source: Observable <number> = interval(0.1);
  constructor() {
  }

  ngOnInit() {
    setTimeout(() => {
      this.progressData.value = this.progressData.percentage;
    }, 300);
    // this.subscription.add(this.source.subscribe(t => {
    //   if (t <= this.progressData.percentage) {
    //     this.progressData.value = t;
    //   }
    // }));
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
