import {Component, OnInit, Input, Output, EventEmitter, SimpleChanges, OnChanges, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy} from '@angular/core';

export interface TopMenu {
  title: string;
  link: string;
}

@Component({
  selector: 'app-scrollable-tab',
  templateUrl: './scrollable-tab.component.html',
  styleUrls: ['./scrollable-tab.component.css']
})

export class ScrollableTabComponent implements OnInit {

  selectedIndex = -1;
  title = 'pinduoduo';

  @Input() menus: TopMenu[] = []
  @Input() backgroundColor: '#fff';
  @Input() titleActiveColor = 'yellow';
  @Input() titleColor = 'blue';
  @Input() indicatorColor = 'brown';
  @Output() tabSelected = new EventEmitter()

  /**
   *  构造函数 永远最先被调用；
   */
  constructor() {
    // console.log('组件-构造函数 - 调用');
  }
  /**
   *  在组件的 `@Input` 属性发生变化的时候调用
   *  @param changes 索引对象，key是属性的名字，value 是SimpleChanges
   */
  ngOnChanges(changes: SimpleChanges): void {
    // console.log('组件-输入属性 - 调用', changes);
  }

  /**
   *  组件初始化完成，在这个函数中，可以安全的使用组件的属性和方法；
   */
  ngOnInit() {
    // console.log('组件- 初始化 - 调用');
  }

  // ngDoCheck(): void {
  //   console.log('组件- 脏值监测  - 调用');
  // }

  /**
   *  组件内容初始化;
   */
  // ngAfterContentInit(): void {
  //   console.log('组件- 内容初始化 - 调用');
  // }
  /**
   *  组件内容脏值监测;
   */
  // ngAfterContentChecked(): void {
  //   console.log('组件- 内容脏值监测 - 调用');
  // }
  /**
   *  组件视图初始化;
   */
  // ngAfterViewInit(): void {
  //   console.log('组件- 视图初始化 - 调用');
  // }
  /**
   *  组件视图脏值监测;
   */
  // ngAfterViewChecked(): void {
  //   console.log('组件- 视图脏值监测 - 调用');
  // }
  /**
   *  需要做一些清理工作;
   */
  // ngOnDestroy(): void {
  //   console.log('组件销毁时 - 调用');
  // }

  handleClick(index: number) {
    this.selectedIndex = index;
    this.tabSelected.emit(this.menus[this.selectedIndex])
  }

}
