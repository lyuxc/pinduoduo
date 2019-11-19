import { Component, OnInit, Input, ViewChild, ElementRef, ViewChildren, QueryList, Renderer2, AfterViewInit, OnDestroy } from '@angular/core';

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
export class ImageSliderComponent implements OnInit, AfterViewInit {

  @Input() sliders: ImageSlider[]=[]
  @Input() sliderHeight = '160px';
  @Input() intervalBySeconds =2;
  selectedIndex = 0;
  intervalId;
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
    // this.imgs.forEach(item=>{
    //   this.rd2.setStyle(item.nativeElement, 'height', '100px');
    // }) 

    this.intervalId = setInterval(() => {
      this.rd2.setProperty(
        this.imgSlider.nativeElement, 'scrollLeft', (this.getIndex(++this.selectedIndex) * this.imgSlider.nativeElement.scrollWidth / this.sliders.length)
      );
    },this.intervalBySeconds * 1000)
  }

  ngOnDestory(): void {
    console.log('ngOnDestory - 组件卸载')
    clearInterval(this.intervalId)
  }
   
  getIndex(idx: number): number {
    return idx >= 0 ? idx % this.sliders.length : this.sliders.length - (Math.abs(idx) % this.sliders.length) 
  }
  handleScroll(e) {
    const ratio = (e.target.scrollLeft * this.sliders.length) / e.target.scrollWidth;
    this.selectedIndex = Math.round(ratio);

  }
  

}
