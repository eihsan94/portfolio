import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { EducationPage } from './education.page';



describe('EducationPage', () => {
  let page: EducationPage;
  let fixture: ComponentFixture<EducationPage>;

  beforeEach(async(() => {
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
