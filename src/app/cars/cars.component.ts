import { Component } from '@angular/core';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.less']
})
export class CarsComponent {
  constructor() {
    
  }
  addCarStatus = false;
  carName = '';
  
  addCar() {
    this.addCarStatus = true;
  }


}
