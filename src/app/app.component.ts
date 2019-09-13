import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  answers = [{
    type: 'yes',
    text: 'Да'
  }, {
    type: 'no',
    text: 'Нет'
  }];

  // submitForm(form: NgForm) {
  //   console.log('Submited!', form);
  // }

  submitForm(form:NgForm) {
    console.log('Submited!', form);
  }
}
