import { Component, OnInit, Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Emoji, Confirmavle } from '../../decorators';

@Component({
  selector: 'app-horizontal-grid',
  templateUrl: './horizontal-grid.component.html',
  styleUrls: ['./horizontal-grid.component.css']
})
export class HorizontalGridComponent implements OnInit {
  
  private _username = '';

  @Output() usernameChange = new EventEmitter();
  @Emoji() result = 'Hello';
  constructor() { }

  ngOnInit() {
  } 

  @Input()
  public get username() : string {
    return this._username;
  }

  public set username(value: string) {
    this._username = value;
    this.usernameChange.emit(value);
  }

  // @Confirmavle('点击已执行');
  // handleClick() {
  //   console.log('点击已执行');
  // }

}
