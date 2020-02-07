import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimatedPercentageBarComponent } from './animated-percentage-bar.component';
import { ProgressData } from './model/animated-percentage-bar.model';

describe('AnimatedPercentageBarComponent', () => {
  let component: AnimatedPercentageBarComponent;
  let fixture: ComponentFixture<AnimatedPercentageBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnimatedPercentageBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimatedPercentageBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    const progressData = new ProgressData();
    progressData.percentage = 100;
    progressData.value = 100;
    component.progressData = progressData;
    expect(component).toBeTruthy();
  });
});
