import { Component, OnInit, Input, Output } from '@angular/core';

export interface Channel {
  id: number;
  icon: string;
  title: string;
  link: string;
}

@Component({
  selector: 'app-horizontal-grid',
  templateUrl: './horizontal-grid.component.html',
  styleUrls: ['./horizontal-grid.component.css']
})
export class HorizontalGridComponent implements OnInit {
  
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
