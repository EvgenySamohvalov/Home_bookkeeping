import { Component, OnInit, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-add-car',
  templateUrl: './add-car.component.html',
  styleUrls: ['./add-car.component.less']
})
export class AddCarComponent implements OnInit {


  carYear = 2017;
  @Output('onAddCar') carEmitter = new EventEmitter<{name: string, year: number}>();
  @ViewChild('carYearInput',{ static: false }) carYearInput:ElementRef;

  constructor() { }

  ngOnInit() {
  }
  // addCar(carNameEl: HTMLInputElement) {
  //   this.carEmitter.emit({
  //     name: carNameEl.value,
  //     year: this.carYear
  //   });
   
  //   carNameEl.value = '';
  //   this.carYear = 2017;
  // }

  addCar(carNameEl: HTMLInputElement) {
    this.carEmitter.emit({
      name: carNameEl.value,
      year: +this.carYearInput.nativeElement.value
    });
   
    carNameEl.value = '';
    this.carYearInput.nativeElement.value = 2017;
  }

}
