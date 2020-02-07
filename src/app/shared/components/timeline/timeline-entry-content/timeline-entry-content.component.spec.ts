import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MglTimelineEntryContentComponent } from './timeline-entry-content.component';
import { AnimationBuilder } from '@angular/animations';

describe('TimelineEntryContentComponent', () => {
  let component: MglTimelineEntryContentComponent;
  let fixture: ComponentFixture<MglTimelineEntryContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MglTimelineEntryContentComponent ],
      providers: [AnimationBuilder]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MglTimelineEntryContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
