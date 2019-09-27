import { PowPipe } from "./pow.pipe"

describe('PowPipe', () => {
    let pipe: PowPipe;

    beforeEach(() => {
        pipe = new PowPipe();
    })

    it(`shoud create instance pipe`, () => {
       expect(pipe).toBeTruthy(); 
       expect(pipe.transform).toBeDefined();
    })

    it(`shoud bla bla bla`, () => {
        const result = pipe.transform(2, 3);
        expect(result).toBe(8); 
    })
})