import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-education',
  templateUrl: './education.page.html',
  styleUrls: ['./education.page.scss']
})
export class EducationPage implements OnInit {
  educations = [
    {
      duration: 'bachelorDuration',
      scholar: 'bachelorDegree',
      school: 'bachelorSchool',
      contents: [
        'bachelorDegreeContent1', 'bachelorDegreeContent2', 'bachelorDegreeContent3'
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
  constructor() { }

  ngOnInit() {
  }

}
