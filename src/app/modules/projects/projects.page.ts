import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.page.html',
  styleUrls: ['./projects.page.scss']
})
export class ProjectsPage implements OnInit {
  projects = [
    {name: 'Vegekko', description: 'VegekkoDescription', img: '../../../assets/image/vegekko.png', url: 'https://home.vegekko.com/'},
    {name: 'Portfolio', description: 'PortfolioDescription', img: '../../../assets/image/portfolio.png',
      url: 'https://master.d3phb5yfhxhh0o.amplifyapp.com/'},
    {name: 'Active', description: 'ActiveDescription', img: '../../../assets/image/active.png',
      url: 'https://master.d96dqo2mwj537.amplifyapp.com/'},
  ];
  constructor() { }

  ngOnInit() {
  }

  navigateTo(url: string): void {
    window.location.assign(url);
  }
}
