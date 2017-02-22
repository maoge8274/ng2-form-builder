import { Component, OnInit } from '@angular/core';
import {LibElement} from '../lib-element/libElement';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  private libElements:LibElement[];

  constructor() { }

  ngOnInit() {
    this.libElements = [];
    for(let i=0;i<10;i++){
      this.libElements.push(new LibElement({title:`element_${i}`,type:''}))
    }
  }

}
