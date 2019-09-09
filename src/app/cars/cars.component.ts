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
  
  addCar() {
    this.addCarStatus = true;
    this.cars.push(this.carName);
    // добавляем в массив cars значение из инпута с carName;
    this.carName = '';
    //  Очищаем значение carName;
  }

  setBigCarText (car: string) {
    return car.length > 4 ? true : false;
  }


}
