import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-establishment-view',
  templateUrl: './establishment-view.page.html',
  styleUrls: ['./establishment-view.page.scss'],
})
export class EstablishmentViewPage implements OnInit {

  establishment: any;
  
  constructor(private dataService: DataService) { 
  
  }

  ionViewDidEnter() {
    this.getData();
  }

  getData() {
    this.establishment = this.dataService.getSelectedEstablishment();
  }

  ngOnInit() {
    
  }

}
