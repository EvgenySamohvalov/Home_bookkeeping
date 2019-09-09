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
  cars = ['Fort','Audi','BMW'];
  items = [{id:3, name: 'item 1'}, {id:6, name: 'item 2'}, {id:9, name: 'item 3'}]
  
  addCar() {
    this.addCarStatus = true;
    this.cars.push(this.carName);
    // добавляем в массив cars значение из инпута с carName;
    this.carName = '';
    //  Очищаем значение carName;
  }


}
