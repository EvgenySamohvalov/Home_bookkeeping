import { Component } from '@angular/core';
import { CarsService } from './cars.service';


interface Cars {
  name: string;
  color: string;
  id: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent  {
  colors = [
    'red',
    'blue',
    'green',
    'yellow',
    'pink',
    'grey'
  ]
  cars: Cars[] = [];
  carName: string = '';
  constructor(private carsService: CarsService) {}


  loadCars() {
    this.carsService
    .getCars()
    .subscribe((cars: Cars[]) => {
      this.cars = cars;
    });
  }

  addCar() {
    this.carsService
      .addCar(this.carName)
      .subscribe((car: Cars) => {
      this.cars.push(car);
    });
    this.carName = '';
  }

  getRandColor() {
    const num = Math.round(Math.random() *(this.colors.length - 1));
    // Выбираем рандомное число
    return this.colors[num];
    // Применяем это число.
  }

  setNewColor(car :Cars) {
    this.carsService.changeColor(car, this.getRandColor())
    .subscribe((data) => {
      console.log(data);
    });
    // нужно подписаться на изменение нашего стрима
  }
}
