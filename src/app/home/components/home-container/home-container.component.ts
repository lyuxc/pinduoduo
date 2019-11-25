import { Component, OnInit } from '@angular/core';
import { TopMenu, ImageSlider } from 'src/app/shared/components';
import { Channel } from 'src/app/shared/components' 

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

  channels: Channel[] = [
    { 
      id: 1,
      title: '限时秒杀1',
      icon: 'http://placehold.it/60x60',
      link: 'hot'
    },{ 
      id: 2,
      title: '限时秒杀2',
      icon: 'http://placehold.it/60x60',
      link: 'hot'
    },{ 
      id: 3,
      title: '限时秒杀3',
      icon: 'http://placehold.it/60x60',
      link: 'hot'
    },{ 
      id: 4,
      title: '限时秒杀4',
      icon: 'http://placehold.it/60x60',
      link: 'hot'
    },{ 
      id: 5,
      title: '限时秒杀5',
      icon: 'http://placehold.it/60x60',
      link: 'hot'
    },{ 
      id: 6,
      title: '限时秒杀6',
      icon: 'http://placehold.it/60x60',
      link: 'hot'
    },{ 
      id: 7,
      title: '限时秒杀7',
      icon: 'http://placehold.it/60x60',
      link: 'hot'
    },{ 
      id: 8,
      title: '限时秒杀8',
      icon: 'http://placehold.it/60x60',
      link: 'hot'
    }
  ]

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
