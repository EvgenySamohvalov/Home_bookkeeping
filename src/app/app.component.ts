import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { promise } from 'protractor';
import { reject } from 'q';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit{
  answers = [{
    type: 'yes',
    text: 'Да'
  }, {
    type: 'no',
    text: 'Нет'
  }];

  form: FormGroup;

  charsCount = 5;

  ngOnInit() {
    this.form = new FormGroup({
      user: new FormGroup({
        email: new FormControl('', [Validators.required, Validators.email],this.checkForEmail),
        pass: new FormControl('', [Validators.required, this.checkForLength.bind(this)]),
  
      }),
      country: new FormControl('ru'),
      answer: new FormControl('no')
    });
  }

  onSubmit() {
    console.log('Submit!',this.form);
  }

  checkForLength(control: FormControl) {
    if(control.value.length <= this.charsCount) {
      return {
        'lengthError': true
      };
    }
    return null;
  }

  checkForEmail(control: FormControl) : Promise<any> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if(control.value === 'test@mail.ru') {
          resolve({
            'emailsUsed' : true
          });
        } else {
          resolve(null);
        }
      }, 3000);
    });
  }
}
