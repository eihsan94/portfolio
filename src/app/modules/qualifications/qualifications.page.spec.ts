import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { QualificationsPage } from './qualifications.page';

describe('QualificationsPage', () => {
  let component: QualificationsPage;
  let fixture: ComponentFixture<QualificationsPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ QualificationsPage ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QualificationsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
