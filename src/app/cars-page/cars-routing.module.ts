import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { CarsPageComponent } from './cars-page.component';
import { CarPageComponent } from './car-page/car-page.component';


const carsRoutes: Routes = [
    // тут мы опишем все роуты касающиеся машин
    { path: 'cars', component: CarsPageComponent, children: [
        { path: ':id/:name', component: CarPageComponent }
      ] }
];

@NgModule ({
    imports:[
        RouterModule.forChild(carsRoutes)
        // регестрируем модуль и отдаём его,
        // но указываем что это не корень а ребёнок
    ],
    // то что мы отдаём
    exports:[
        RouterModule
    ]
    // то что мы принимаем
})

export class CarsRoutingModule {}