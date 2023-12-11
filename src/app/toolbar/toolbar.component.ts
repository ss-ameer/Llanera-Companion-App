import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router, ActivatedRouteSnapshot } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
})
export class ToolbarComponent implements OnInit {
  pageTitle: string = '';

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.router.events.pipe(
      filter((event): event is NavigationEnd => event instanceof NavigationEnd)
    ).subscribe(() => {
      const snapshot = this.activatedRoute.snapshot;
      this.setPageTitle(snapshot);
    });
  }

  setPageTitle(routeSnapshot: ActivatedRouteSnapshot): void {
    const title = this.getPageTitle(routeSnapshot);
    this.pageTitle = title;
  }

  private getPageTitle(routeSnapshot: ActivatedRouteSnapshot): string {
    let title = '';

    while (routeSnapshot.firstChild) {
      routeSnapshot = routeSnapshot.firstChild;
    }

    title = routeSnapshot.data['title'] || title;

    return title;
  }
}