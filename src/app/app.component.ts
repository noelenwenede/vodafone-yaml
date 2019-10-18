import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from './api-service.service';
import * as yaml from "js-yaml"

// var yaml = require('yaml-to-json').yaml;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
  title = 'vodafone';
  loading: boolean;
  error;
  yamldata;
  data;


  constructor(private apiService: ApiServiceService){}

  async ngOnInit(){
    /**
     * Gets the YAML file from the api using the angular httpclient
     * @see api-service.service.ts for implemetation
     */
    this.loading = true;
    this.apiService.getYaml2().subscribe(d => {
      d.text().then(
        f => {
          this.data =f;
          this.yamldata = yaml.load(f)
        }
      )
    }, e => {
        this.error = e.message
    }).add(() => this.loading = false)
    
  }

  processList(data: Object){
    let heads = Object.keys(data);
  }

  isObject(data){
    return typeof data === "object";
  }

  getKeys(data){
    if(data){
      return Object.keys(data)
    }

    return []
  }
}
