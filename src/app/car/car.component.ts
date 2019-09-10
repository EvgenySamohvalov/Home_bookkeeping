import { Component, Input, ContentChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.less']
})
export class CarComponent {
  @Input('carItem')car : {name: string, year: number};
  @ContentChild('carHeading',{ static: false }) carHeading: ElementRef;

  ngAfterViewInet() {
    console.log(this.carHeading);
  }
}
