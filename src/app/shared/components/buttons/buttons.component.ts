import { Component, OnInit, Input } from '@angular/core';
import { ButtonMetaData } from './model/button';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.scss']
})
export class ButtonsComponent implements OnInit {
  @Input() buttonMetaData: ButtonMetaData;

  constructor() { }

  ngOnInit() {
  }

}
