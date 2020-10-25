import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { SIDE_NAV } from '../../consts/sideNav';
@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss']
})
export class SideMenuComponent implements OnInit {

  collapseShow = 'hidden';
  currentRoute = '/';
  constructor(private route: Router) { 
    this.route.events.forEach((event) => {
      if (event instanceof NavigationEnd) {
        console.log(event);
        this.currentRoute = event.urlAfterRedirects;
      }
    });
  }

  ngOnInit(): void {
  }

  toggleCollapseShow(classes): void {
    this.collapseShow = classes;
  }

  get sideNavList() { return SIDE_NAV; }

  isActive(route) {
    return this.currentRoute.includes(route);
  }

  menuToggle(event) {
    this.toggleCollapseShow(this.collapseShow === 'hidden' ? 'bg-white  py-3 px-6' : 'hidden')
  }
}
