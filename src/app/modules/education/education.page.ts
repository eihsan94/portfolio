import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { map, shareReplay } from 'rxjs/operators';

@Component({
  selector: 'app-education',
  templateUrl: './education.page.html',
  styleUrls: ['./education.page.scss']
})
export class EducationPage implements OnInit {
  isHandset$: Observable< boolean > = this.breakpointObserver.observe(Breakpoints.Handset)
  .pipe(
    map(result => result.matches),
    shareReplay()
  );

  educations = [
    {
      duration: 'bachelorDuration',
      scholar: 'bachelorDegree',
      school: 'bachelorSchool',
      contents: [
        'bachelorDegreeContent1', 'bachelorDegreeContent2'
      ]
    },
    {
      duration: 'collegeDuration',
      scholar: 'collegeDegree',
      school: 'collegeSchool',
      contents: [
        'collegeDegreeContent1', 'collegeDegreeContent2', 'collegeDegreeContent3'
      ]
    },
    {
      duration: 'higherSecondaryDuration',
      scholar: 'higherSecondaryDegree',
      school: 'higherSecondarySchool',
      contents: [
        'higherSecondaryDegreeContent1', 'higherSecondaryDegreeContent2', 'higherSecondaryDegreeContent3'
      ]
    },
    {
      duration: 'lowerSecondaryDuration',
      scholar: 'lowerSecondaryDegree',
      school: 'lowerSecondarySchool',
      contents: [
        'lowerSecondaryDegreeContent1', 'lowerSecondaryDegreeContent2', 'lowerSecondaryDegreeContent3'
      ]
    },
    {
      duration: 'primaryDuration',
      scholar: 'primaryDegree',
      school: 'primarySchool',
      contents: [
        'primaryDegreeContent1', 'primaryDegreeContent2', 'primaryDegreeContent3'
      ]
    },
  ];
  constructor(
    private breakpointObserver: BreakpointObserver,
  ) { }

  ngOnInit() {
    
  }

}
