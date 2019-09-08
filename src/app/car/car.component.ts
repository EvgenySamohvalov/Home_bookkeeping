import { Component } from '@angular/core';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.less']
})
export class CarComponent {
  carName = 'Ford';
  carYear = 2015;

  getName() {
    return this.carName;
  }

}
