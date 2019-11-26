import { Component, OnInit } from '@angular/core';
import { TopMenu } from 'src/app/shared/components';

@Component({
  selector: 'app-home-container',
  templateUrl: './home-container.component.html',
  styleUrls: ['./home-container.component.css']
})
export class HomeContainerComponent implements OnInit {
  
  scrollableTabBgColor = 'red';
  
  topMenus: TopMenu[] = [
    {
      title: '热门',
      link: ''
    }, {
      title: '男装',
      link: ''
    }, {
      title: '百货',
      link: ''
    }, { 
      title: '运动',
      link: ''
    }, {
      title: '手机',
      link: ''
    }, {
      title: '家纺',
      link: ''
    }, {
      title: '食品',
      link: ''
    }, {
      title: '内衣',
      link: ''
    }, {
      title: '家装',
      link: ''
    }, {
      title: '母婴',
      link: ''
    }, {
      title: '美妆',
      link: ''
    }, {
      title: '家居',
      link: ''
    }, {
      title: '酒水',
      link: ''
    }, {
      title: '零食',
      link: ''
    }, {
      title: '厨具',
      link: ''
    }, {
      title: '家居',
      link: ''
    }, {
      title: '家居',
      link: ''
    }, {
      title: '家居',
      link: ''
    }, {
      title: '家居',
      link: ''
    }
  ];

  

  handleTabSelected(topMenu: TopMenu) {
    const colors = ['red', 'blue', 'black'];
    const idx = Math.floor(Math.random() * 3);
    this.scrollableTabBgColor = colors[idx];
    console.log(topMenu);
  }

  ngAfterViewInit(): void {
    // console.log(this.imgSlider)
  }

  constructor() { }

  ngOnInit() {
  }

}
