import { Component, OnInit,Input } from '@angular/core';
import {LibElement} from './libElement';

@Component({
  selector: 'app-lib-element',
  templateUrl: './lib-element.component.html',
  styleUrls: ['./lib-element.component.css']
})
export class LibElementComponent implements OnInit {

  @Input()
  object:LibElement;

  constructor() { }

  ngOnInit() {
  }

}
