import { Component, Input, ContentChild, ElementRef, OnInit, OnChanges, DoCheck, AfterContentInit } from '@angular/core';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.less']
})
export class CarComponent implements 
OnInit, 
OnChanges, 
DoCheck,
AfterContentInit
{
  @Input('carItem')car : {name: string, year: number};
  @Input() name : string;
  @ContentChild('carHeading',{ static: false }) carHeading: ElementRef;

  // ngAfterViewInet() {
  //   console.log(this.carHeading);
  // }


  ngAfterContentInit() {
    console.log('ngAfterContentInit');
  }
  ngAfterViewChecked() {
    console.log('ngAfterViewChecked');
  }

  ngDoCheck() {
    console.log('ngDoCheck');
  }

  ngOnChanges() {
    console.log('ngOnChanges');
  }

  ngOnInit() {
    console.log('ngOnInit');
  }

  constructor() {
    // первый жизненный цикл компонента(загружается сразу после инициализации)
    console.log('constructor');
  }

  
  

}

