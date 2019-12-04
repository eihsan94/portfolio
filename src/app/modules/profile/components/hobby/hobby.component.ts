import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hobby',
  templateUrl: './hobby.component.html',
  styleUrls: ['./hobby.component.scss']
})
export class HobbyComponent implements OnInit {
  items = [
    { title: 'longboardHobby', path: '../../../../../assets/image/longboard.jpg' },
    { title: 'readingHobby', path: '../../../../../assets/image/reading.jpg' },
    { title: 'programmingHobby', path: '../../../../../assets/image/programming.jpg' },
    { title: 'cookingHobby', path: '../../../../../assets/image/cooking.jpg' },
  ];
  constructor() { }

  ngOnInit() {
  }

}
