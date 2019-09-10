import { Component } from '@angular/core';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.less']
})
export class CarsComponent {

  cars = [{
    name: 'Ford',
    year: 2015
  }, {
    name:'Mazda',
    year: 2010
  }, {
    name:'Audi',
    year: 2017
  }];

  constructor() {
  }

  updateCarList(car: {name: string, year: number}) {
    this.cars.push(car);
  }

  changeCarName() {
    this.cars[0].name = 'New car name!';
  }

}
