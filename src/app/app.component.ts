import { Component } from '@angular/core';
// import 'rxjs/Rx';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  template: `
  <div class="col-xs-8 col-xs-offset-2">
  <h1>{{asyncTitle | async}}</h1>
    <input type="text" class="form-control" [(ngModel)]="searchCar">
    <button class="btn-primery"(click)="addCar()">Добавить</button>
    <hr>
    <ul class="list-group">
      <li 
      class="list-group-item" 
      *ngFor="let car of cars | carFilter:searchCar:'descr';let idx = index"
      >
        <b>{{idx + 1}}</b>
        {{car.name}}
        <i>{{car.descr}}</i>
      </li>
    </ul>
  </div>
  `
})
export class AppComponent {
  searchCar: '';
  cars = [
    {name: 'Ford', descr: 'WFM 1'},
    {name: 'Mazda', descr: 'WFM 2'},
    {name: 'Bently', descr: 'WFM 3'},
    {name: 'Audi', descr: 'WFM 4'},
    {name: 'Mersedes', descr: 'WFM 5'},
    {name: 'BMW', descr: 'WFM 6'}
  ];

  asyncTitle = Observable.of('Async title 3 seconds')
  .delay(3000);

  addCar() {
    this.cars.push({
      name: 'New car',
      descr: 'WFM'
    })
  }
}
