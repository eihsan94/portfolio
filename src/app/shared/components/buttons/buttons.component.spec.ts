import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ButtonsComponent } from './buttons.component';
import { ButtonMetaData } from './model/button';

describe('ButtonsComponent', () => {
  let component: ButtonsComponent;
  let fixture: ComponentFixture<ButtonsComponent>;
  const buttonMetaData: ButtonMetaData = {
    type: 'fab',
    icon: 'add',
    color: 'accent',
    tooltip: '',
    disabled: false,
    matTooltipDisabled: false,
    clickEvent: () => console.log(`${buttonMetaData.type} works`),
  };

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ButtonsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    component.buttonMetaData = buttonMetaData;
    expect(component).toBeTruthy();
  });
});
