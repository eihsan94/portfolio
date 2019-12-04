import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basic-info',
  templateUrl: './basic-info.component.html',
  styleUrls: ['./basic-info.component.scss']
})
export class BasicInfoComponent implements OnInit {
  rows = [
    {label: 'birthdateLabel', data: 'birthdateData'},
    {label: 'emailLabel', data: 'eihsan94@gmail.com'},
    {label: 'phoneLabel', data: '080-2947-4788'},
    {label: 'addressLabel', data: 'addressData'},
    {label: 'languageLabel', data: 'languageData'},
  ];
  constructor() { }

  ngOnInit() {
  }

}
