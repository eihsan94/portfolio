import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { WorkExperiencePage } from './work-experience.page';

describe('WorkExperiencePage', () => {
  let component: WorkExperiencePage;
  let fixture: ComponentFixture<WorkExperiencePage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkExperiencePage ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkExperiencePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
