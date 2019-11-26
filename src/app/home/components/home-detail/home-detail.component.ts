import { Component, OnInit } from '@angular/core';
import { ImageSlider, Channel } from 'src/app/shared/components';


@Component({
  selector: 'app-home-detail',
  templateUrl: './home-detail.component.html',
  styleUrls: ['./home-detail.component.css']
})
export class HomeDetailComponent implements OnInit {

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

  constructor() { }

  ngOnInit() {
  }

}
