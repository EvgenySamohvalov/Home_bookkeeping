import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  headerText = 'Создание своей дерективы.';
  items = [1, 2, 3, 4, 5, 6];
  current = 1; // свойство по которому мы будем делать свич

  onClick(number:number) {
    this.current = number;
  }
}
