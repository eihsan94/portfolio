import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { EducationPage } from './education.page';



describe('EducationPage', () => {
  let page: EducationPage;
  let fixture: ComponentFixture<EducationPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ EducationPage ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EducationPage);
    page = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(page).toBeTruthy();
  });
});
