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
  cars = ['Fort','Audi','BMW','Mersedes','Mazda', 'Lada'];
  items = [
    new Date(2015, 1, 2).toDateString(),
    new Date(2011, 3, 4).toDateString(),
    new Date(2017, 5, 3).toDateString(),
    new Date(2000, 2, 5).toDateString(),
  ]
  
  addCar() {
    this.addCarStatus = true;
    this.cars.push(this.carName);
    this.carName = '';
  }
}
