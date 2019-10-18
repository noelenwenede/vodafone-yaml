import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-object-display',
  templateUrl: './object-display.component.html',
  styleUrls: ['./object-display.component.sass']
})
export class ObjectDisplayComponent implements OnInit {

  @Input("object") object: any;

  constructor() { }

  ngOnInit() {
  }

  /**
   * 
   * @param data Returns the keys of an object
   */
  getKeys(data){
    if(data){
      return Object.keys(data)
    }
    return []
  }

  /**
   * 
   * @param data Checks ifthe type of a variable is object
   */
  isObject(data){
    return typeof data === "object";
  }

}
