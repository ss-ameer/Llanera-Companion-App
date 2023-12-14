import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.page.html',
  styleUrls: ['./about.page.scss'],
})
export class AboutPage implements OnInit {

  member: any;

  constructor(public dataService: DataService) {
    
   }

   chunkedArray(array: any[] | null | undefined, chunkSize: number): any[][] {
    if (!array) {
      return [];
    }

    const result = [];
    for (let i = 0; i < array.length; i += chunkSize) {
      result.push(array.slice(i, i + chunkSize));
    }
    return result;
  }

  ionViewDidEnter() {
    this.member = this.dataService.getDeveloper();
  }

  ngOnInit() {
  }

}
