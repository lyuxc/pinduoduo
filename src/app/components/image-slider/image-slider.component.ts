import { Component, OnInit, Input, ViewChild, ElementRef, ViewChildren, QueryList, Renderer2 } from '@angular/core';

export interface ImageSlider {
  imgUrl: string;
  link: string;
  caption: string;
}

@Component({
  selector: 'app-image-slider',
  templateUrl: './image-slider.component.html',
  styleUrls: ['./image-slider.component.css']
})
export class ImageSliderComponent implements OnInit {

  @Input() sliders: ImageSlider[]=[]
  @ViewChild('imageSlider', {static: true}) imgSlider: ElementRef;
  @ViewChildren('img') imgs: QueryList<ElementRef>

  constructor(private rd2: Renderer2) { }

  ngOnInit() {
    console.log('ngOnInit 1', this.imgSlider)
    console.log('ngOnInit 2', this.imgs)
    // this.imgSlider.nativeElement.innerHTML = `<span>hello</span>`
  }
  ngAfterViewInit(): void {
    console.log('ngOnInit 2', this.imgs)
    // this.imgs.forEach(item=>item.nativeElement.style.height = '100px');
    this.imgs.forEach(item=>{
      this.rd2.setStyle(item.nativeElement, 'height', '100px');
    })
  }
  

}
