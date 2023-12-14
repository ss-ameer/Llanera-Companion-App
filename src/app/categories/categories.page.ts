import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { DataService } from '../data.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.page.html',
  styleUrls: ['./categories.page.scss']
})

export class CategoriesPage implements OnInit {

  cateCardsData: any[];

  constructor(
    private menuCtrl: MenuController,
    private router: Router,
    private dataService: DataService) {

      this.cateCardsData = this.dataService.cateCardsData;
    }
    
  onItemClick(selectedObject: any): void {
    this.dataService.setSelectedEstablishment(selectedObject);
    this.menuCtrl.open('end');
    this.dataService.toggleMenu();
  }

  isEstablishmentOpen(establishment: any): boolean {
    if (!establishment.conHour || establishment.conHour.length === 0) {
      // console.log(`${establishment.conTitle} is open (no specified hours)`);
      return true;
    }
  
    const currentDate = new Date();
    const currentDay = currentDate.toLocaleDateString('en-US', { weekday: 'long' });
    const currentTime = currentDate.getHours() + ':' + currentDate.getMinutes();
    const todayHours = establishment.conHour.find((dayHours: any) => dayHours.hasOwnProperty(currentDay));
    
    if (todayHours) {
      const openingTime = todayHours[currentDay][0];
      const closingTime = todayHours[currentDay][1];

      const isOpen = currentTime >= openingTime && currentTime <= closingTime;
  
      // console.log(`${establishment.conTitle} is ${isOpen ? 'open' : 'closed'}`);
      return isOpen;
    }

    // console.log(`${establishment.conTitle} is closed (no hours for today)`);
    return false;
  }
  ngOnInit() {}
}