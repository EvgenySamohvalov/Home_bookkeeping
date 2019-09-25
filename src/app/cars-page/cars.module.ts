import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { CarsPageComponent } from "./cars-page.component";
import { CarPageComponent } from "./car-page/car-page.component";
import { CarsService } from "app/cars.service";
import { CarsRoutingModule } from "./cars-routing.module";
// import { ColorDirective } from "app/shared/color.directive";


@NgModule({
    // так как это сущность машин, нам нужно зарегестрирываь компоненты 
    declarations:[
        CarsPageComponent, 
        CarPageComponent,
        // зарегали два компонента
        // ColorDirective
    ],
    imports: [
        CommonModule,
        CarsRoutingModule
        // подключается для того что бы работали базовые дерективы, 
        // но при этом он был более аптимизирован чем brawzer module
    ],
    // для коректной работы нужно кое что импортировать
    providers:[CarsService]
    // регаем сервис
})
export class CarsModule {}