import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'appPow'
})
export class PowPipe implements PipeTransform{
    transform(value: any, powNumber = 1, symb: string) {
        return symb + symb + Math.pow(value,powNumber);
    }
}