import { ColorDirective } from "./color.directive"

describe('ColorDirective', () => {
    let directive: ColorDirective;

    beforeEach(() => {
        directive = new ColorDirective();
    })

    it(`shoud create iasasdasdasdasdase pipe`, () => {
       expect(directive).toBeTruthy(); 

    })

    it(`shoud bla bla bla7777777777777`, () => {
        directive.onClick
        expect(directive.color).toBe('red'); 
    })
})