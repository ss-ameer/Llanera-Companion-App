import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-government',
  templateUrl: './government.page.html',
  styleUrls: ['./government.page.scss'],
})
export class GovernmentPage implements OnInit {

  govEstablishment: any;
  govOfficial: any;
  

  constructor(public dataService: DataService) {
    this.govEstablishment = this.dataService.getGovEstablishment();
    this.govOfficial = this.dataService.getGovOfficial();
  }

  ngOnInit() {
  }

}
