import { Component } from '@angular/core';
import { Router, NavigationEnd, Event as NavigationEvent } from '@angular/router';
import { filter } from 'rxjs/operators';
import { DataService } from './data.service';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  items: { name: string, link: string, iconName: string }[] = [
    { name: 'Home', link: '/home', iconName: 'home' },
    { name: 'Government', link: '/government', iconName: 'globe' },
    { name: 'Categories', link: '/categories', iconName: 'list' },
    { name: 'About Us', link: '/about', iconName: 'information-circle' }, 
  ];
  
  activeItem: string | null = null;
  selectedEstablishment: any;
  
  constructor(
    private router: Router, 
    private dataService: DataService
    ) {

    this.dataService.menuToggle$.subscribe(() => {
      this.selectedEstablishment = this.dataService.getSelectedEstablishment();
    });

    this.router.events.pipe(
      filter((event): event is NavigationEnd => event instanceof NavigationEnd)
      ).subscribe({
        next: (event) => {this.setActiveItem(event.urlAfterRedirects);}
      });
  }

  setActiveItem(currentRoute: string): void {
    const routeWithoutParams = currentRoute.split('?')[0];
    const activeItem = this.items.find(item => item.link === routeWithoutParams);
    this.activeItem = activeItem ? activeItem.link : null;
  }
}