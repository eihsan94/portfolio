import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.page.html',
  styleUrls: ['./projects.page.scss']
})
export class ProjectsPage implements OnInit {
  projects = [
    {name: 'BFUN', description: 'BFUNDescription', img: '../../../assets/image/bfun.png',
      url: 'https://b-fun.netlify.app/'},
    {name: 'Team Yaa Mall', description: 'TYMDescription', img: '../../../assets/image/tym.png',
      url: 'https://team-yaa-mall-stg.herokuapp.com/'},
    {name: 'YUAI', description: 'YuaiDescription', img: '../../../assets/image/yuai.png',
      url: 'https://yuai.netlify.app/'},
    {name: 'Nextjs Material Components', description: 'NMCDescription', img: '../../../assets/image/nmc.png',
      url: 'https://next-material-component.vercel.app/admin/dashboard'},
    {name: 'Ionic Ecommerce', description: 'IECDescription', img: '../../../assets/image/ionic-ecommerce.png',
      url: 'https://team-yaa.netlify.app/tabs/shop'},
    {name: 'Vegekko', description: 'VegekkoDescription', img: '../../../assets/image/vegekko.png', url: 'https://home.vegekko.com/'},
    {name: 'Gatsbyjs Contentful CMS Blog', description: 'GBDescription', img: '../../../assets/image/gb.png',
      url: 'https://old-team-yaa.netlify.app/'},
    {name: 'My Simple Blog', description: 'MSBCDescription', img: '../../../assets/image/blog.png',
      url: 'https://nextjs-blog-sigma-wheat.vercel.app/'},
    {name: 'Portfolio', description: 'PortfolioDescription', img: '../../../assets/image/portfolio.png',
      url: 'https://master.d3phb5yfhxhh0o.amplifyapp.com/'},
  ];
  constructor() { }

  ngOnInit() {
  }

  navigateTo(url: string): void {
    window.location.assign(url);
  }
}
