import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http' ;
import { BgbService } from '../../services/bgb.service';
import * as lodash from 'lodash';

@Component({
  selector: 'app-bgb',
  template: `content`,   
  templateUrl: './bgb.component.html',
  styleUrls: ['./bgb.component.css']
})
export class BgbComponent implements OnInit {

  loading = true;
  paragraphs = [];
  swapP = [];
  constructor(private bgbService: BgbService) { }

  ngOnInit() {
  this.getParagraphs();
  }

  getParagraphs(){
  this.bgbService.getParagraphs().subscribe(
  data => (this.paragraphs = data, this.swapP = lodash.cloneDeep(data)),
  error => console.log(error),
  () => this.loading = false
  );
  }
  search(e){
    console.log(e.target.value === '');
    if(e.target.value === ''){
      console.log("EMPTY")
      this.paragraphs = this.swapP
    }else{
    var filteredParagraphs= this.paragraphs.filter(p => (p.number.includes(e.target.value))) 
    this.paragraphs = filteredParagraphs
    }
  }}
