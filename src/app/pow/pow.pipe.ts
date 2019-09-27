import { PipeTransform, Pipe } from "@angular/core";


@Pipe({
    name: 'pow'
})
export class PowPipe implements PipeTransform{
    transform(num: number, pow:number = 1) {
        return Math.pow(num, pow);
    }
};