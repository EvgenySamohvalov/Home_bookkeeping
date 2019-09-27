import { TestBed } from '@angular/core/testing';
import { CarComponent } from './car.component';

describe('CarComponent', () => {

  beforeEach(() => {
// Колбек, который вызывается перед каждоу функцией
    TestBed.configureTestingModule({
      declarations: [CarComponent]
    })
    // самый главный компонент для тестирования. 
  });

  it('should create component instance', () => {
    const fixture = TestBed.createComponent(CarComponent);
    const component = fixture.debugElement.componentInstance;
    // Получаем компоненти записываем его в константу
    expect(component).toBeTruthy();
    // ожидаем от компонента что бы он был создан
  });

  it(`should render h1 tag with title 'My car header'`, () => {
    const fixture = TestBed.createComponent(CarComponent);
    fixture.detectChanges();
    const component = fixture.debugElement.nativeElement;
    const text = component.querySelector('h1').textContent;
    expect(text).toEqual('My car header');
  });

});