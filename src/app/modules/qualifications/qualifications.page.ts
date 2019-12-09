import { Component } from '@angular/core';

@Component({
  selector: 'app-qualifications',
  templateUrl: './qualifications.page.html',
  styleUrls: ['./qualifications.page.scss']
})
export class QualificationsPage {
  stylesheet = 'https://www.testdome.com/content/source/stylesheets/embed.css';
  link = document.createElement('link');
  qualifications = {
      title: 'qualificationsTitle',
      contents: [
        {date: 'ToeicYear', certificate: 'Toeic', result: '935Point', path: '../../../assets/image/toeic.jpg'},
        {date: 'JLPTYear', certificate: 'JLPT-N1', result: 'Pass', path: '../../../assets/image/JLPT.jpg'},
        {date: 'EikenYear', certificate: 'EikenCertificate', result: 'Pass', path: '../../../assets/image/eiken.png'},
        {date: 'DeleYear', certificate: 'DeleCertificate', result: 'Pass', path: '../../../assets/image/dele.png'},
        {date: 'ITPassportYear', certificate: 'IT Passport', result: 'Pass', path: '../../../assets/image/ITPassport.png'},
        {date: 'TestDomeYear', certificate: 'TestDome', result: 'Pass', path: ''},
      ]
    };
  constructor() {
    this.link.href = this.stylesheet;
    this.link.type = 'text/css';
    this.link.rel = 'stylesheet';
    this.link.media = 'screen,print';
    document.getElementsByTagName('head')[0].appendChild(this.link);
  }
}
