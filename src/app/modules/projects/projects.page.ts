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
    {name: 'YUAI', description: 'YuaiDescription', img: '../../../assets/image/yuai.png',
      url: 'https://yuai.netlify.app/'},
    {name: 'Team Yaa Mall', description: 'TYMDescription', img: '../../../assets/image/tym.png',
      url: 'https://team-yaa-mall.herokuapp.com/'},
  ];
  constructor() { }

  ngOnInit() {
  }

  navigateTo(url: string): void {
    window.location.assign(url);
  }
}
