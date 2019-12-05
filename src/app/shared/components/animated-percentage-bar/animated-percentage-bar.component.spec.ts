import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimatedPercentageBarComponent } from './animated-percentage-bar.component';

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
    expect(component).toBeTruthy();
  });
});
