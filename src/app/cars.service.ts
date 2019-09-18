import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";
import { map } from "rxjs/operator/map";

@Injectable() 
export class CarsService {
    constructor(private http: Http) {}

    getCars() {
        return this.http.get('http://localhost:3000/cars')
        .map((response: Response) => response.json());
    }

    addCar(carName: string) {
        const data = {
            name:carName,
            color:'pink'
        };
        return this.http.post('http://localhost:3000/cars', data)
        .map((response: Response) => response.json());
    }

    changeColor(car: any, color: string) {
        car.color = color;
        return this.http.put(`http://localhost:3000/cars/${car.id}`, car)
        .map((response: Response) => response.json());
    }
}