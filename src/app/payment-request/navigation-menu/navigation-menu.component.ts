import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'navigation-menu',
  templateUrl: './navigation-menu.component.html',
  styleUrls: ['./navigation-menu.component.css']
})
export class NavigationMenuComponent implements OnInit {

  routes: Array<Object>;
  route: ActivatedRoute;

  constructor() {
   }

  ngOnInit() {
    this.route = new ActivatedRoute();

    this.routes = [
      {
        name: 'Create CF Proposal',
        route: '/proposal/create'
      },
      {
        name: 'Vote on CF Proposal',
        route: '/proposal/vote'
      },
      {
        name: 'Create CF Payment Request',
        route: 'create'
      },
      {
        name: 'Vote on CF Payment Request',
        route: 'vote'
      },
    ]
  }
}
