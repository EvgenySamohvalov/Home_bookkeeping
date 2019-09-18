import { Component, OnInit } from '@angular/core';
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
export class AppComponent implements OnInit {
  colors = [
    'red',
    'blue',
    'green',
    'yellow',
    'pink',
    'grey'
  ]
  cars: any;
  carName: string = '';
  appTitle;
  constructor(private carsService: CarsService) {}

  ngOnInit() {
    this.cars = this.appTitle = this.carsService.getAppTitle();
  }

  loadCars() {
    this.cars = this.carsService.getCars()

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
  }

  deleteCar(car :Cars) {
    this.carsService.deleteCar(car)
    .subscribe((data) => {
      this.cars = this.cars.filter((c => c.id !== car.id));
      console.log(data);
    }); 
  }
}
