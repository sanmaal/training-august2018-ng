import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-flipping-card',
  templateUrl: './flipping-card.component.html',
  styleUrls: [ './flipping-card.component.scss' ]
})
export class FlippingCardComponent implements OnInit {
  @Input() data: any;
  additions: any = [];
  flipped: boolean = false;

  constructor() {
  }

  ngOnInit() {
    /*  const { additions } = this.data;
      Object.keys(additions).map((name) => {
        this.additions.push({name: name, value: additions[name]});
      })*/
  }

  rotateCard() {
    this.flipped = !this.flipped;
  }

}
