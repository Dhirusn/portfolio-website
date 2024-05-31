import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio-gallery',
  templateUrl: './portfolio-gallery.component.html',
  styleUrl: './portfolio-gallery.component.scss'
})
export class PortfolioGalleryComponent {
  selectedFilter = '*';

  portfolioItems = [
    {
      category: 'latest',
      imgSrc: '../../../assets/img/portfolio/p1.jpg',
      title: 'minimal design',
      description: 'Animated, portfolio',
      detailLink: '/portfolio-details'
    },
    {
      category: 'popular',
      imgSrc: '../../../assets/img/portfolio/p2.jpg',
      title: 'Paint wall',
      description: 'Animated, portfolio',
      detailLink: '/portfolio-details'
    },
    {
      category: 'latest',
      imgSrc: '../../../assets/img/portfolio/p3.jpg',
      title: 'female light',
      description: 'Animated, portfolio',
      detailLink: '/portfolio-details'
    },
    {
      category: 'popular',
      imgSrc: '../../../assets/img/portfolio/p4.jpg',
      title: 'fourth air',
      description: 'Animated, portfolio',
      detailLink: '/portfolio-details'
    },
    {
      category: 'following',
      imgSrc: '../../../assets/img/portfolio/p6.jpg',
      title: 'together sign',
      description: 'Animated, portfolio',
      detailLink: '/portfolio-details'
    },
    {
      category: 'upcoming',
      imgSrc: '../../../assets/img/portfolio/p5.jpg',
      title: 'multiply fowl',
      description: 'Animated, portfolio',
      detailLink: '/portfolio-details'
    },
    {
      category: 'upcoming following',
      imgSrc: '../../../assets/img/portfolio/p7.jpg',
      title: 'green heaven',
      description: 'Animated, portfolio',
      detailLink: '/portfolio-details'
    },
    {
      category: 'following',
      imgSrc: '../../../assets/img/portfolio/p8.jpg',
      title: 'fly male',
      description: 'Animated, portfolio',
      detailLink: ''
    },
    {
      category: 'upcoming',
      imgSrc: '../../../assets/img/portfolio/p9.jpg',
      title: 'season face',
      description: 'Animated, portfolio',
      detailLink: '/portfolio-details'
    }
  ];

  filterItems(filter: string) {
    this.selectedFilter = filter;
  }

  isItemVisible(item: any) {
    return this.selectedFilter === '*' || item.category.includes(this.selectedFilter);
  }
}
