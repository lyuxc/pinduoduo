import { Component, ViewChild } from '@angular/core';
import { TopMenu, ImageSlider, ImageSliderComponent } from './shared/components'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // @ViewChild('imageSlider') imgSlider: ImageSliderComponent;
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

  imageSliders: ImageSlider[] = [
    {
      imgUrl: 'http://placehold.it/350x161',
      link: '',
      caption: '第1张'
    },{
      imgUrl: 'http://placehold.it/350x162',
      link: '',
      caption: '第2张'
    },{ 
      imgUrl: 'http://placehold.it/350x163',
      link: '',
      caption: '第3张'
    },{
      imgUrl: 'http://placehold.it/350x164',
      link: '',
      caption: '第4张'
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

}
