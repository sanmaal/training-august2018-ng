import { Component, HostBinding, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-block',
  templateUrl: './main-block.component.html',
  styleUrls: [ './main-block.component.scss' ]
})
export class MainBlockComponent implements OnInit {

  constructor() {
  }

  @HostBinding('class.col-md-11') addColMarkup: boolean = false;

  ngOnInit() {
    console.log(this);
    this.addColMarkup = true;
  }

}
