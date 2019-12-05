import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { Subscription, Observable, timer } from 'rxjs';
import { ProgressData } from './model/animated-percentage-bar.model';

@Component({
  selector: 'app-animated-percentage-bar',
  templateUrl: './animated-percentage-bar.component.html',
  styleUrls: ['./animated-percentage-bar.component.scss']
})
export class AnimatedPercentageBarComponent implements OnInit, OnDestroy {
  @Input() progressData: ProgressData;
  subscription = new Subscription();
  source: Observable <number> = timer(1, 10);
  value = 0;
  constructor() {
  }

  ngOnInit() {
    this.subscription.add(this.source.subscribe(t => {
      if (t < this.progressData.percentage) {
        this.progressData.value = t;
      }
    }));
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
