import { Component } from '@angular/core';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.less']
})
export class CarsComponent {
  constructor() {
    
  }

  addCarStatus = '';
  
  addCar() {
    this.addCarStatus = 'Машина добавлена!'
  }

  inputText = 'Hello';
  onKeyUp(event) {
    this.inputText = event.target.value;
  }

}
